"use client";

import { AudioPlayerEngine } from "@/lib/audio-player/AudioPlayerEngine";
import { useEffect, useRef } from "react";
export default function AudioPlayer() {
  const audioPlayer = new AudioPlayerEngine();
  const audioRef = useRef<HTMLAudioElement>();

  useEffect(() => {
    console.log(audioPlayer);

    audioPlayer.createAudio(audioRef.current!);
  }, [audioRef.current]);
  return (
    <>
      <audio ref={audioRef as any} />
    </>
  );
}
