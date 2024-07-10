import AudioPlayer from "./AudioPlayer";

export interface AudioOptions {
  controllers?: boolean;
  src: string;
  key?: string;
  preload?: "none" | "metadata" | "auto";
}

export interface AudioPlayerEntity
  extends HTMLAudioElement,
    ReturnType<AudioPlayer> {}
