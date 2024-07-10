import { AudioPlayerEngine } from "./AudioPlayerEngine";
import { AudioOptions } from "./audio-player";
import { AudioStore } from "./audio-store";

// function checkAudio(
//   target: any,
//   propertyKey: string,
//   descriptor: PropertyDescriptor
// ) {
//   const originalMethod = descriptor.value;

//   descriptor.value = function (...args: any[]) {
//     if (!this.audio) {
//       throw new Error("no audio initialized");
//     }
//     return originalMethod.apply(this, args);
//   };

//   return descriptor;
// }

const audioStore = new AudioStore();

export default class AudioPlayer {
  readonly audio_key: string;
  private readonly audio: HTMLAudioElement | null;
  constructor(opts: AudioOptions) {
    if (!opts.src)
      throw TypeError("You must pass a source (src) to your audio");

    this.audio_key = opts?.key || opts.src;
    const audioElement = new Audio(opts.src);
    audioElement.id = this.audio_key;
    audioElement.controls = opts?.controllers ?? false;
    audioElement.preload = opts.preload ?? "none";
    this.audio = audioElement;

    const audioPlayerEngine = new AudioPlayerEngine();
    audioPlayerEngine.createAudio(this.audio);
  }

  /**
   * Separate the naming between the AudioPlayer Type and the HTMLAudioElement
   */

  // 🧮 computed

  get running(): boolean {
    return this.audio?.paused ?? false;
  }
  get duration(): number {
    if (!this.audio) throw new Error("no audio initialized");
    return this.audio!.duration;
  }

  // 🪵 Methods

  public pause() {
    if (!this.audio) throw new Error("no audio initialized");

    this.audio.pause();
  }

  public stop(): void {
    if (!this.audio) throw new Error("no audio initialized");

    this.audio.pause();
    this.setCurrentTime(0);
  }

  public pauseAll() {
    audioStore.keys().forEach(k => {
      const audio = audioStore.grant<HTMLAudioElement>(k);

      if (audio) audio.pause();
    });
  }

  // @checkAudio
  public play() {
    if (!this.audio) throw new Error("no audio initialized");
    this.pauseAll();
    this.audio?.play();
  }

  /**
   * 🚨 not safe..
   */
  public toggle(): void {
    if (!this.audio) throw new Error("no audio initialized");
    if (this.running) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
  }

  public setVolume(volume: number): void {
    if (!this.audio) throw new Error("no audio initialized");
    this.audio.volume = volume;
  }

  public setPlaybackRate(rate: number): void {
    if (!this.audio) throw new Error("no audio initialized");
    this.audio!.playbackRate = rate;
  }

  public setCurrentTime(time: number): void {
    if (!this.audio) throw new Error("no audio initialized");
    if (!time || time === Infinity) return;
    if (time < 0) {
      time = 0;
    }

    this.audio!.currentTime = time;
  }

  // 🪝 HOOKS!

  // TODO: add custom metadata event;

  public onEnded(callback?: () => void): void {
    if (!this.audio) throw new Error("no audio initialized");
    this.audio.addEventListener("ended", () => {
      callback?.();
    });
  }
  // on time update
  public onTimeUpdate(callback?: (time: number) => void): void {
    if (!this.audio) throw new Error("no audio initialized");

    this.audio.addEventListener("timeupdate", () => {
      callback?.(this.audio!.currentTime);
    });
  }

  // on buffering - loading media
  public onBuffering(callback?: () => void): void {
    if (!this.audio) throw new Error("no audio initialized");

    this.audio.addEventListener("waiting", () => {
      callback?.();
    });
  }
  // on buffering ends - played
  public onPlaying(callback?: () => void): void {
    if (!this.audio) throw new Error("no audio initialized");
    this.audio.addEventListener("playing", () => {
      callback?.();
    });
  }

  // on media paused
  public onPause(callback: () => void) {
    if (!this.audio) throw new Error("no audio initialized");
    this.audio.addEventListener("pause", () => {
      callback?.();
    });
  }
}
