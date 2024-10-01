'use client'
import WaveTrack from '@/components/track/wavetrack';
import { useSearchParams } from 'next/navigation'


import React from 'react'

export default function DetailTrackPage({params}: {params: {slug: string}}) {
    const searchParams = useSearchParams();

    const search = searchParams.get('audio');

  return (
    <div>DetailTrackPage
        <div className=""><WaveTrack /></div>
    </div>
  )
}
