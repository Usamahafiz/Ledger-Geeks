"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 90;
const RADIUS = 2.4;
const CONNECT_DISTANCE = 1.05;
const BRAND_COLORS = ["#00d9c0", "#4f8dfd", "#6c5ce7"];

function generateSpherePoints(count: number, radius: number) {
  const points: THREE.Vector3[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;
    points.push(new THREE.Vector3(x * radius, y * radius, z * radius));
  }

  return points;
}

function useNormalizedPointer() {
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return pointer;
}

type DragState = {
  active: boolean;
  startX: number;
  startY: number;
  dx: number;
  dy: number;
};

const tempObject = new THREE.Object3D();
const tempColor = new THREE.Color();

function NetworkMesh({ inView }: { inView: React.RefObject<boolean> }) {
  const groupRef = useRef<THREE.Group>(null);
  const instancedRef = useRef<THREE.InstancedMesh>(null);
  const autoRotation = useRef(0);
  const pointer = useNormalizedPointer();

  const drag = useRef<DragState>({
    active: false,
    startX: 0,
    startY: 0,
    dx: 0,
    dy: 0,
  });
  const squash = useRef({ x: 1, y: 1, z: 1 });

  const points = useMemo(() => generateSpherePoints(NODE_COUNT, RADIUS), []);

  const edges = useMemo(() => {
    const segments: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (points[i].distanceTo(points[j]) < CONNECT_DISTANCE) {
          segments.push([points[i], points[j]]);
        }
      }
    }
    return segments;
  }, [points]);

  const lineGeometry = useMemo(() => {
    const positions = new Float32Array(edges.length * 6);
    edges.forEach(([a, b], i) => {
      positions[i * 6] = a.x;
      positions[i * 6 + 1] = a.y;
      positions[i * 6 + 2] = a.z;
      positions[i * 6 + 3] = b.x;
      positions[i * 6 + 4] = b.y;
      positions[i * 6 + 5] = b.z;
    });
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [edges]);

  useEffect(() => {
    if (!instancedRef.current) return;
    points.forEach((point, i) => {
      tempObject.position.copy(point);
      tempObject.updateMatrix();
      instancedRef.current!.setMatrixAt(i, tempObject.matrix);
      tempColor.set(BRAND_COLORS[i % BRAND_COLORS.length]);
      instancedRef.current!.setColorAt(i, tempColor);
    });
    instancedRef.current.instanceMatrix.needsUpdate = true;
    if (instancedRef.current.instanceColor) {
      instancedRef.current.instanceColor.needsUpdate = true;
    }
  }, [points]);

  const handlePointerDown = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    (event.target as Element).setPointerCapture?.(event.pointerId);
    drag.current.active = true;
    drag.current.startX = event.clientX;
    drag.current.startY = event.clientY;
    drag.current.dx = 0;
    drag.current.dy = 0;
  };

  const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
    if (!drag.current.active) return;
    drag.current.dx = event.clientX - drag.current.startX;
    drag.current.dy = event.clientY - drag.current.startY;
  };

  const endDrag = () => {
    drag.current.active = false;
    drag.current.dx = 0;
    drag.current.dy = 0;
  };

  useFrame((state, delta) => {
    if (!groupRef.current || !inView.current) return;

    autoRotation.current += delta * 0.12;

    const targetY = autoRotation.current + pointer.current.x * 0.6;
    const targetX =
      Math.sin(state.clock.elapsedTime * 0.15) * 0.15 - pointer.current.y * 0.4;

    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.04;
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.04;

    const targetZoom = 6 - Math.abs(pointer.current.x) * 0.3 - Math.abs(pointer.current.y) * 0.3;
    state.camera.position.z += (targetZoom - state.camera.position.z) * 0.03;

    const maxDrag = 220;
    const dragMagnitude = drag.current.active
      ? Math.min(
          Math.sqrt(drag.current.dx ** 2 + drag.current.dy ** 2) / maxDrag,
          1
        )
      : 0;

    const angle = Math.atan2(drag.current.dy, drag.current.dx);
    const stretch = 1 + dragMagnitude * 0.55;
    const squeeze = 1 - dragMagnitude * 0.3;

    const targetScaleX =
      squeeze + (stretch - squeeze) * Math.cos(angle) ** 2;
    const targetScaleY =
      squeeze + (stretch - squeeze) * Math.sin(angle) ** 2;
    const targetScaleZ = squeeze;

    const springSpeed = drag.current.active ? 0.18 : 0.1;
    squash.current.x += (targetScaleX - squash.current.x) * springSpeed;
    squash.current.y += (targetScaleY - squash.current.y) * springSpeed;
    squash.current.z += (targetScaleZ - squash.current.z) * springSpeed;

    groupRef.current.scale.set(
      squash.current.x,
      squash.current.y,
      squash.current.z
    );
  });

  return (
    <group
      ref={groupRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      onPointerCancel={endDrag}
    >
      <mesh visible={false}>
        <sphereGeometry args={[RADIUS + 0.3, 12, 12]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial
          color="#4f8dfd"
          transparent
          opacity={0.18}
          depthWrite={false}
        />
      </lineSegments>

      <instancedMesh ref={instancedRef} args={[undefined, undefined, NODE_COUNT]}>
        <sphereGeometry args={[0.035, 8, 8]} />
        <meshBasicMaterial />
      </instancedMesh>
    </group>
  );
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const inView = useRef(true);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

export default function NetworkGlobe() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="absolute inset-0 h-full w-full cursor-grab opacity-70 mix-blend-screen active:cursor-grabbing"
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.6} />
        <NetworkMesh inView={inView} />
      </Canvas>
    </div>
  );
}
