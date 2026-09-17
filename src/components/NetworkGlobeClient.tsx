"use client";

import dynamic from "next/dynamic";

const NetworkGlobe = dynamic(() => import("./NetworkGlobe"), { ssr: false });

export default function NetworkGlobeClient() {
  return <NetworkGlobe />;
}
