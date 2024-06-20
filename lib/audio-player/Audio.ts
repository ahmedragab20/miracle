import { AudioStore } from "./audio-store";

// function checkAudio(
//   target: any,
//   propertyKey: string,
//   descriptor: PropertyDescriptor
// ) {
//   const originalMethod = descriptor.value;

//   descriptor.value = function (...args: any[]) {
//     if (!Audio.audio) {
//       throw new Error("no audio initialized");
//     }
//     return originalMethod.apply(this, args);
//   };

//   return descriptor;
// }

const audioStore = new AudioStore();

export default class Audio {
  readonly audio_key: string;
  static audio: HTMLAudioElement | null;
  constructor(key: string) {
    console.log("%cHi", "font-size: 2rem");

    this.audio_key = key;
    Audio.audio = audioStore.grant<HTMLAudioElement>(this.audio_key);
    console.log("Audio.audio", Audio.audio);
  }

  pause() {
    if (!Audio.audio) throw new Error("no audio initialized");
    Audio.audio?.pause();
  }

  pauseAll() {
    audioStore.keys().forEach(k => {
      audioStore.grant<HTMLAudioElement>(k)?.pause();
    });
  }

  // @checkAudio
  play() {
    console.log({ this: this, Audio });

    this.pauseAll();
    Audio.audio?.play();
  }
}
