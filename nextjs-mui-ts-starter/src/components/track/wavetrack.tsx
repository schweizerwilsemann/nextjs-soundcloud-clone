import React, { useEffect, useRef, useState, useMemo } from "react";
import { useWavesurfer } from "@/utils/customHooks";
import { useSearchParams } from "next/navigation";

const WaveTrack = () => {
  const searchParams = useSearchParams();
  const fileName = searchParams.get("audio");
  const containerRef = useRef<HTMLDivElement>(null);

  const optionsMemo = useMemo(() => {
    return {
      waveColor: "rgb(200, 0, 200)",
      progressColor: "rgb(100, 0, 100)",
      url: `/api?audio=${fileName}`,
    };
  }, []);

  const wavesurfer = useWavesurfer(containerRef, optionsMemo);

  return <div ref={containerRef}>wave track</div>;
};

export default WaveTrack;
