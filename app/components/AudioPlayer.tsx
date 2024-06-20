// TODO: add metadata
"use client";

import { PlayIcon, PauseIcon } from "@radix-ui/react-icons";
import { AudioPlayerEngine } from "@/lib/audio-player/AudioPlayerEngine";
import { useEffect, useId, useRef, useState } from "react";
import Audio from "@/lib/audio-player/Audio";
export default function AudioPlayer() {
  const audioPlayerEngine = new AudioPlayerEngine();
  const audioRef = useRef<HTMLAudioElement>();
  const id = useId();
  const audioPlayer = new Audio(id);

  const [count, setCount] = useState(0);

  useEffect(() => {
    audioPlayerEngine.createAudio(audioRef.current!);
    setCount(1);
  }, [audioRef.current]);

  return (
    <div key={count}>
      <audio id={id} ref={audioRef as any} src="/001.mp3" hidden />
      <div className="bg-slate-50">
        <pre>{JSON.stringify(Audio.audio?.src)}</pre>
      </div>
      <div className="max-w-full border p-3 rounded-xl flex justify-center items-center">
        <button
          tabIndex={1}
          className="p-2 hover:shadow rounded-full bg-gradient-to-tl from-gray-500 via-gray-300 to-gray-700"
          onClick={audioPlayer?.play}
        >
          {Audio.audio?.paused ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
    </div>
  );
}
