// TODO: add metadata
"use client";

import { PlayIcon, PauseIcon, StopIcon } from "@radix-ui/react-icons";
import { AudioPlayerEngine } from "@/lib/audio-player/AudioPlayerEngine";
import { memo, useEffect, useId, useRef, useState } from "react";
import AudioPlayer from "@/lib/audio-player/AudioPlayer";
import { AudioPlayerEntity } from "@/lib/audio-player/audio-player";
import { Button } from "@/components/ui/button";

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
  return (
    <div>
      <div className="max-w-full space-x-2 border p-3 rounded-xl flex justify-center items-center">
        <Button tabIndex={1} onClick={audioPlayer.play}>
          <PauseIcon />
        </Button>

        <Button tabIndex={1} onClick={audioPlayer.pause}>
          <PlayIcon />
        </Button>

        <Button tabIndex={1} onClick={audioPlayer.pauseAll}>
          <StopIcon />
        </Button>
      </div>
    </div>
  );
});
