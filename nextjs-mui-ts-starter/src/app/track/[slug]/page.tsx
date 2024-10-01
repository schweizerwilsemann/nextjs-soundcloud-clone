"use client";
import WaveTrack from "@/components/track/wavetrack";
import { useSearchParams } from "next/navigation";
import { Container } from "@mui/material";

import React from "react";

export default function DetailTrackPage({
  params,
}: {
  params: { slug: string };
}) {
  const searchParams = useSearchParams();

  const search = searchParams.get("audio");

  return (
    <Container>
      <div className="">
        <WaveTrack />
      </div>
    </Container>
  );
}
