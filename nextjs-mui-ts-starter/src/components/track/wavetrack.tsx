"use client";

import React, { useEffect } from "react";
import WaveSurfer from "wavesurfer.js";
import { useRef } from "react";
import { useSearchParams } from "next/navigation";

export default function WaveTrack() {
  const searchParams = useSearchParams();

  const fileName = searchParams.get("audio");

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (containerRef.current) {
      WaveSurfer.create({
        container: containerRef.current,
        waveColor: "#4F4A85",
        progressColor: "#383351",
        url: `/api?audio=${fileName}`,
      });
    }
  }, []);
  return <div ref={containerRef}>WaveTrack</div>;
}
