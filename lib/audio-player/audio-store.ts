import { isDev } from "../helpers/core";

/**
 * your persisted memory state
 */
const _state = new Map();
export class AudioStore {
  get state() {
    return new Proxy(_state, {
      get(target, property, receiver) {
        if (isDev()) {
          console.log(`accessing ${property.toString()}: `, target);
          console.log({ target, property, receiver });
        }

        return Reflect.get(target, property, receiver);
      },
      set() {
        throw new Error("You can't directly modify the state.");
      }
    });
  }

  add<T>(key: string, data: T) {
    _state.set(key, data);
    if (isDev()) {
      console.log({ key, data, _state });
    }

    return { key, data };
  }
  grant<T>(key: string): T | null {
    return _state.get(key) || null;
  }

  /**
   * returns all the map keys {string[]}
   */
  keys(): string[] {
    return Array.from(_state.keys()) || [];
  }
}
