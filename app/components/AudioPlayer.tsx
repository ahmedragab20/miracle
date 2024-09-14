// TODO: add metadata
"use client";

import { PlayIcon, PauseIcon, StopIcon } from "@radix-ui/react-icons";
import { memo, useId } from "react";
import AudioPlayer from "@/lib/audio-player/AudioPlayer";
import { Button } from "@/components/ui/button";
import { AudioOptions } from "@/lib/audio-player/audio-player";

export default memo(function AudioPlayerComponent(props: AudioOptions) {
  if (!props.src) throw TypeError("[400] the src (source) prop is missing");

  const id = useId();
  let audioPlayer;

  if (!audioPlayer && typeof window !== "undefined") {
    audioPlayer = new AudioPlayer({
      src: props.src,
      key: props?.key || id,
      controllers: props?.controllers,
      preload: props?.preload
    });
  }

  if (!audioPlayer) return null;

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
        <Button
          className="rounded-xl"
          tabIndex={1}
          onClick={() => {
            audioPlayer.play.call(audioPlayer);
          }}
        >
          <PlayIcon />
        </Button>

        <Button
          className="rounded-xl"
          tabIndex={1}
          onClick={() => {
            audioPlayer.pause.call(audioPlayer);
          }}
        >
          <PauseIcon />
        </Button>

        <Button
          className="rounded-xl"
          tabIndex={1}
          onClick={() => {
            audioPlayer.stop.call(audioPlayer);
          }}
        >
          <StopIcon />
        </Button>
      </div>
    </div>
  );
});
