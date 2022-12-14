class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  on(eventName, callback) {
    this.events.has(eventName)
      ? this.events.get(eventName).set(callback, false)
      : this.events.set(eventName, new Map().set(callback, false));
  }

  off(eventName, callback) {
    this.events.get(eventName).delete(callback);
  }

  once(eventName, callback) {
    this.events.has(eventName)
      ? this.events.get(eventName).set(callback, true)
      : this.events.set(eventName, new Map().set(callback, true));
  }

  emit(eventName, ...args) {
    this.events.get(eventName).forEach((onced, fn) => {
      fn(...args);
      if (onced) this.events.get(eventName).delete(fn);
    });
  }
}
const Emitter = new EventEmitter();

export default Emitter;
