// TODO: add metadata
"use client";

import { PlayIcon, PauseIcon, StopIcon } from "@radix-ui/react-icons";
import { AudioPlayerEngine } from "@/lib/audio-player/AudioPlayerEngine";
import { memo, useEffect, useId, useRef, useState } from "react";
import AudioPlayer from "@/lib/audio-player/AudioPlayer";
import { AudioPlayerEntity } from "@/lib/audio-player/audio-player";

export default memo(function AudioPlayerComponent(
  {
    /**
     * TODO:: mirror the AudioPlayer props with the component's props;
     */
  }
) {
  const id = useId();
  let audioPlayer;
  console.log({});

  if (!audioPlayer) {
    audioPlayer = new AudioPlayer({
      src: `https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/36.mp3`,
      key: id
    });
  }

  audioPlayer.onBuffering(() => {
    console.log("buffering...");
  });

  audioPlayer.onPlaying(() => {
    console.log("Playing...");
  });

  audioPlayer.onPause(() => {
    console.log("Paused.");
  });

  audioPlayer.onTimeUpdate(time => {
    console.log("onTimeUpdate...", time);
  });

  let testAudio: AudioPlayerEntity;

  const [running, setRunning] = useState(false);
  return (
    <div>
      <div className="max-w-full space-x-2 border p-3 rounded-xl flex justify-center items-center">
        <button
          tabIndex={1}
          className="p-2 hover:shadow rounded-lg bg-blue-600 text-white"
          onClick={() => {
            audioPlayer.play();
          }}
        >
          <PlayIcon />
        </button>
        <button
          tabIndex={1}
          className="p-2 hover:shadow rounded-lg bg-orange-600 text-white"
          onClick={() => {
            audioPlayer.pause();
          }}
        >
          <PauseIcon />
        </button>

        <button
          tabIndex={1}
          className="p-2 hover:shadow rounded-lg bg-red-600 text-white"
          onClick={() => {
            audioPlayer.pauseAll();
          }}
        >
          <StopIcon />
        </button>
      </div>
    </div>
  );
});
