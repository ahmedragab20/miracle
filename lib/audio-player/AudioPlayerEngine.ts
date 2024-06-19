import { isBrowser } from "@/lib/helpers/core";
export class AudioPlayerEngine {
  private _audio: HTMLAudioElement | null;
  constructor() {
    this._audio = null;
  }
  /**
   * creates a new tracked audio element to interact with
   */
  createAudio(audio: HTMLAudioElement) {
    if (!isBrowser()) {
      return;
    }
    this._audio = audio;
  }

  get audio() {
    return this._audio;
  }
}
