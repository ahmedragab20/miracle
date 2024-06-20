import { AudioStore } from "./audio-store";
import { isBrowser } from "@/lib/helpers/core";

const audioStore = new AudioStore();
export class AudioPlayerEngine {
  /**
   * creates a new tracked audio element to interact with
   */
  createAudio(audio: HTMLAudioElement) {
    if (!isBrowser()) return;
    if (!audio?.id) {
      throw new Error("You need to add an ID for your audio element");
    }
    if (!audio?.src) {
      throw new Error("You're audio element doesn't include source URL");
    }
    audioStore.add<HTMLAudioElement>(audio.id, audio);
  }
}
