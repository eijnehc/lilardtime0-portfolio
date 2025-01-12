"use client";

import React from "react";
import dynamic from "next/dynamic";

// Import the client component dynamically with ssr disabled
const RaceCharts = dynamic(() => import("@/components/RaceCharts"), {
  ssr: false,
});

export default function ProgressPage() {
  return (
    <main className="p-8">
      <RaceCharts />
    </main>
  );
}
