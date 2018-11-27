// declare module 'scrape-twitter';
export class ConnectionStream {
  static Duplex(options: any): any;
  static PassThrough(options: any): any;
  static ReadableState(options: any, stream: any, isDuplex: any): void;
  static Transform(options: any): any;
  static finished(stream: any, opts: any, callback: any): any;
  static pipeline(...args: any[]): any;
  constructor(username: any, type: any, ...args: any[]);
  addListener(ev: any, fn: any): any;
  destroy(err: any, cb: any): any;
  emit(type: any, ...args: any[]): any;
  eventNames(): any;
  getMaxListeners(): any;
  isPaused(): any;
  listenerCount(type: any): any;
  listeners(type: any): any;
  on(ev: any, fn: any): any;
  once(type: any, listener: any): any;
  pause(): any;
  pipe(dest: any, pipeOpts: any): any;
  prependListener(type: any, listener: any): any;
  prependOnceListener(type: any, listener: any): any;
  push(chunk: any, encoding: any): any;
  read(n: any): any;
  removeAllListeners(ev: any, ...args: any[]): any;
  removeListener(ev: any, fn: any): any;
  resume(): any;
  setEncoding(enc: any): any;
  setMaxListeners(n: any): any;
  undefined(): any;
  unpipe(dest: any): any;
  unshift(chunk: any): any;
  wrap(stream: any): any;
}
export namespace ConnectionStream {
  class Readable {
    static Duplex(options: any): any;
    static PassThrough(options: any): any;
    // Circular reference from index.ConnectionStream.Readable
    static Readable: any;
    static ReadableState(options: any, stream: any, isDuplex: any): void;
    static Transform(options: any): any;
    static finished(stream: any, opts: any, callback: any): any;
    static pipeline(...args: any[]): any;
    constructor(options: any);
    readable: any;
    addListener(ev: any, fn: any): any;
    destroy(err: any, cb: any): any;
    emit(type: any, ...args: any[]): any;
    eventNames(): any;
    getMaxListeners(): any;
    isPaused(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    on(ev: any, fn: any): any;
    once(type: any, listener: any): any;
    pause(): any;
    pipe(dest: any, pipeOpts: any): any;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    push(chunk: any, encoding: any): any;
    read(n: any): any;
    removeAllListeners(ev: any, ...args: any[]): any;
    removeListener(ev: any, fn: any): any;
    resume(): any;
    setEncoding(enc: any): any;
    setMaxListeners(n: any): any;
    undefined(): any;
    unpipe(dest: any): any;
    unshift(chunk: any): any;
    wrap(stream: any): any;
  }
  namespace Readable {
    class Stream {
      static Duplex(options: any): any;
      static PassThrough(options: any): any;
      // Circular reference from index.ConnectionStream.Readable.Stream
      static Stream: any;
      static Transform(options: any): any;
      addListener(type: any, listener: any): any;
      emit(type: any, ...args: any[]): any;
      eventNames(): any;
      getMaxListeners(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(type: any, listener: any): any;
      once(type: any, listener: any): any;
      pipe(dest: any, options: any): any;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      setMaxListeners(n: any): any;
    }
    namespace Stream {
      class Readable {
        // Too-deep object hierarchy from index.ConnectionStream.Readable.Stream.Readable
        static ReadableState: any;
        constructor(options: any);
        readable: any;
      }
      class Writable {
        // Too-deep object hierarchy from index.ConnectionStream.Readable.Stream.Writable
        static WritableState: any;
        constructor(options: any);
        writable: any;
      }
    }
    class Writable {
      static WritableState(options: any, stream: any, isDuplex: any): void;
      constructor(options: any);
      writable: any;
      addListener(type: any, listener: any): any;
      cork(): void;
      destroy(err: any, cb: any): any;
      emit(type: any, ...args: any[]): any;
      end(chunk: any, encoding: any, cb: any): any;
      eventNames(): any;
      getMaxListeners(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(type: any, listener: any): any;
      once(type: any, listener: any): any;
      pipe(): void;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      setDefaultEncoding(encoding: any): any;
      setMaxListeners(n: any): any;
      uncork(): void;
      write(chunk: any, encoding: any, cb: any): any;
    }
  }
  class Stream {
    static Duplex(options: any): any;
    static PassThrough(options: any): any;
    // Circular reference from index.ConnectionStream.Stream
    static Stream: any;
    static Transform(options: any): any;
    addListener(type: any, listener: any): any;
    emit(type: any, ...args: any[]): any;
    eventNames(): any;
    getMaxListeners(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    on(type: any, listener: any): any;
    once(type: any, listener: any): any;
    pipe(dest: any, options: any): any;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    removeAllListeners(type: any, ...args: any[]): any;
    removeListener(type: any, listener: any): any;
    setMaxListeners(n: any): any;
  }
  namespace Stream {
    class Readable {
      static ReadableState(options: any, stream: any): void;
      constructor(options: any);
      readable: any;
      addListener(ev: any, fn: any): any;
      destroy(err: any, cb: any): any;
      emit(type: any, ...args: any[]): any;
      eventNames(): any;
      getMaxListeners(): any;
      isPaused(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(ev: any, fn: any): any;
      once(type: any, listener: any): any;
      pause(): any;
      pipe(dest: any, pipeOpts: any): any;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      push(chunk: any, encoding: any): any;
      read(n: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      resume(): any;
      setEncoding(enc: any): any;
      setMaxListeners(n: any): any;
      unpipe(dest: any): any;
      unshift(chunk: any): any;
      wrap(stream: any): any;
    }
    class Writable {
      static WritableState(options: any, stream: any): void;
      constructor(options: any);
      writable: any;
      addListener(type: any, listener: any): any;
      cork(): void;
      destroy(err: any, cb: any): any;
      emit(type: any, ...args: any[]): any;
      end(chunk: any, encoding: any, cb: any): void;
      eventNames(): any;
      getMaxListeners(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(type: any, listener: any): any;
      once(type: any, listener: any): any;
      pipe(): void;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      setDefaultEncoding(encoding: any): any;
      setMaxListeners(n: any): any;
      uncork(): void;
      write(chunk: any, encoding: any, cb: any): any;
    }
  }
  class Writable {
    static WritableState(options: any, stream: any, isDuplex: any): void;
    constructor(options: any);
    writable: any;
    addListener(type: any, listener: any): any;
    cork(): void;
    destroy(err: any, cb: any): any;
    emit(type: any, ...args: any[]): any;
    end(chunk: any, encoding: any, cb: any): any;
    eventNames(): any;
    getMaxListeners(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    on(type: any, listener: any): any;
    once(type: any, listener: any): any;
    pipe(): void;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    removeAllListeners(type: any, ...args: any[]): any;
    removeListener(type: any, listener: any): any;
    setDefaultEncoding(encoding: any): any;
    setMaxListeners(n: any): any;
    uncork(): void;
    write(chunk: any, encoding: any, cb: any): any;
  }
}
export class ConversationStream {
  static Duplex(options: any): any;
  static PassThrough(options: any): any;
  static ReadableState(options: any, stream: any, isDuplex: any): void;
  static Transform(options: any): any;
  static finished(stream: any, opts: any, callback: any): any;
  static pipeline(...args: any[]): any;
  constructor(username: any, id: any, ...args: any[]);
  addListener(ev: any, fn: any): any;
  destroy(err: any, cb: any): any;
  emit(type: any, ...args: any[]): any;
  eventNames(): any;
  getMaxListeners(): any;
  isPaused(): any;
  listenerCount(type: any): any;
  listeners(type: any): any;
  on(ev: any, fn: any): any;
  once(type: any, listener: any): any;
  pause(): any;
  pipe(dest: any, pipeOpts: any): any;
  prependListener(type: any, listener: any): any;
  prependOnceListener(type: any, listener: any): any;
  push(chunk: any, encoding: any): any;
  read(n: any): any;
  removeAllListeners(ev: any, ...args: any[]): any;
  removeListener(ev: any, fn: any): any;
  resume(): any;
  setEncoding(enc: any): any;
  setMaxListeners(n: any): any;
  undefined(): any;
  unpipe(dest: any): any;
  unshift(chunk: any): any;
  wrap(stream: any): any;
}
export namespace ConversationStream {
  class Readable {
    static Duplex(options: any): any;
    static PassThrough(options: any): any;
    // Circular reference from index.ConversationStream.Readable
    static Readable: any;
    static ReadableState(options: any, stream: any, isDuplex: any): void;
    static Transform(options: any): any;
    static finished(stream: any, opts: any, callback: any): any;
    static pipeline(...args: any[]): any;
    constructor(options: any);
    readable: any;
    addListener(ev: any, fn: any): any;
    destroy(err: any, cb: any): any;
    emit(type: any, ...args: any[]): any;
    eventNames(): any;
    getMaxListeners(): any;
    isPaused(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    on(ev: any, fn: any): any;
    once(type: any, listener: any): any;
    pause(): any;
    pipe(dest: any, pipeOpts: any): any;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    push(chunk: any, encoding: any): any;
    read(n: any): any;
    removeAllListeners(ev: any, ...args: any[]): any;
    removeListener(ev: any, fn: any): any;
    resume(): any;
    setEncoding(enc: any): any;
    setMaxListeners(n: any): any;
    undefined(): any;
    unpipe(dest: any): any;
    unshift(chunk: any): any;
    wrap(stream: any): any;
  }
  namespace Readable {
    class Stream {
      static Duplex(options: any): any;
      static PassThrough(options: any): any;
      // Circular reference from index.ConversationStream.Readable.Stream
      static Stream: any;
      static Transform(options: any): any;
      addListener(type: any, listener: any): any;
      emit(type: any, ...args: any[]): any;
      eventNames(): any;
      getMaxListeners(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(type: any, listener: any): any;
      once(type: any, listener: any): any;
      pipe(dest: any, options: any): any;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      setMaxListeners(n: any): any;
    }
    namespace Stream {
      class Readable {
        // Too-deep object hierarchy from index.ConversationStream.Readable.Stream.Readable
        static ReadableState: any;
        constructor(options: any);
        readable: any;
      }
      class Writable {
        // Too-deep object hierarchy from index.ConversationStream.Readable.Stream.Writable
        static WritableState: any;
        constructor(options: any);
        writable: any;
      }
    }
    class Writable {
      static WritableState(options: any, stream: any, isDuplex: any): void;
      constructor(options: any);
      writable: any;
      addListener(type: any, listener: any): any;
      cork(): void;
      destroy(err: any, cb: any): any;
      emit(type: any, ...args: any[]): any;
      end(chunk: any, encoding: any, cb: any): any;
      eventNames(): any;
      getMaxListeners(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(type: any, listener: any): any;
      once(type: any, listener: any): any;
      pipe(): void;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      setDefaultEncoding(encoding: any): any;
      setMaxListeners(n: any): any;
      uncork(): void;
      write(chunk: any, encoding: any, cb: any): any;
    }
  }
  class Stream {
    static Duplex(options: any): any;
    static PassThrough(options: any): any;
    // Circular reference from index.ConversationStream.Stream
    static Stream: any;
    static Transform(options: any): any;
    addListener(type: any, listener: any): any;
    emit(type: any, ...args: any[]): any;
    eventNames(): any;
    getMaxListeners(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    on(type: any, listener: any): any;
    once(type: any, listener: any): any;
    pipe(dest: any, options: any): any;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    removeAllListeners(type: any, ...args: any[]): any;
    removeListener(type: any, listener: any): any;
    setMaxListeners(n: any): any;
  }
  namespace Stream {
    class Readable {
      static ReadableState(options: any, stream: any): void;
      constructor(options: any);
      readable: any;
      addListener(ev: any, fn: any): any;
      destroy(err: any, cb: any): any;
      emit(type: any, ...args: any[]): any;
      eventNames(): any;
      getMaxListeners(): any;
      isPaused(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(ev: any, fn: any): any;
      once(type: any, listener: any): any;
      pause(): any;
      pipe(dest: any, pipeOpts: any): any;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      push(chunk: any, encoding: any): any;
      read(n: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      resume(): any;
      setEncoding(enc: any): any;
      setMaxListeners(n: any): any;
      unpipe(dest: any): any;
      unshift(chunk: any): any;
      wrap(stream: any): any;
    }
    class Writable {
      static WritableState(options: any, stream: any): void;
      constructor(options: any);
      writable: any;
      addListener(type: any, listener: any): any;
      cork(): void;
      destroy(err: any, cb: any): any;
      emit(type: any, ...args: any[]): any;
      end(chunk: any, encoding: any, cb: any): void;
      eventNames(): any;
      getMaxListeners(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(type: any, listener: any): any;
      once(type: any, listener: any): any;
      pipe(): void;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      setDefaultEncoding(encoding: any): any;
      setMaxListeners(n: any): any;
      uncork(): void;
      write(chunk: any, encoding: any, cb: any): any;
    }
  }
  class Writable {
    static WritableState(options: any, stream: any, isDuplex: any): void;
    constructor(options: any);
    writable: any;
    addListener(type: any, listener: any): any;
    cork(): void;
    destroy(err: any, cb: any): any;
    emit(type: any, ...args: any[]): any;
    end(chunk: any, encoding: any, cb: any): any;
    eventNames(): any;
    getMaxListeners(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    on(type: any, listener: any): any;
    once(type: any, listener: any): any;
    pipe(): void;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    removeAllListeners(type: any, ...args: any[]): any;
    removeListener(type: any, listener: any): any;
    setDefaultEncoding(encoding: any): any;
    setMaxListeners(n: any): any;
    uncork(): void;
    write(chunk: any, encoding: any, cb: any): any;
  }
}
export class LikeStream {
  static Duplex(options: any): any;
  static PassThrough(options: any): any;
  static ReadableState(options: any, stream: any, isDuplex: any): void;
  static Transform(options: any): any;
  static finished(stream: any, opts: any, callback: any): any;
  static pipeline(...args: any[]): any;
  constructor(username: any, ...args: any[]);
  addListener(ev: any, fn: any): any;
  destroy(err: any, cb: any): any;
  emit(type: any, ...args: any[]): any;
  eventNames(): any;
  getMaxListeners(): any;
  isPaused(): any;
  listenerCount(type: any): any;
  listeners(type: any): any;
  on(ev: any, fn: any): any;
  once(type: any, listener: any): any;
  pause(): any;
  pipe(dest: any, pipeOpts: any): any;
  prependListener(type: any, listener: any): any;
  prependOnceListener(type: any, listener: any): any;
  push(chunk: any, encoding: any): any;
  read(n: any): any;
  removeAllListeners(ev: any, ...args: any[]): any;
  removeListener(ev: any, fn: any): any;
  resume(): any;
  setEncoding(enc: any): any;
  setMaxListeners(n: any): any;
  undefined(): any;
  unpipe(dest: any): any;
  unshift(chunk: any): any;
  wrap(stream: any): any;
}
export namespace LikeStream {
  class Readable {
    static Duplex(options: any): any;
    static PassThrough(options: any): any;
    // Circular reference from index.LikeStream.Readable
    static Readable: any;
    static ReadableState(options: any, stream: any, isDuplex: any): void;
    static Transform(options: any): any;
    static finished(stream: any, opts: any, callback: any): any;
    static pipeline(...args: any[]): any;
    constructor(options: any);
    readable: any;
    addListener(ev: any, fn: any): any;
    destroy(err: any, cb: any): any;
    emit(type: any, ...args: any[]): any;
    eventNames(): any;
    getMaxListeners(): any;
    isPaused(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    on(ev: any, fn: any): any;
    once(type: any, listener: any): any;
    pause(): any;
    pipe(dest: any, pipeOpts: any): any;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    push(chunk: any, encoding: any): any;
    read(n: any): any;
    removeAllListeners(ev: any, ...args: any[]): any;
    removeListener(ev: any, fn: any): any;
    resume(): any;
    setEncoding(enc: any): any;
    setMaxListeners(n: any): any;
    undefined(): any;
    unpipe(dest: any): any;
    unshift(chunk: any): any;
    wrap(stream: any): any;
  }
  namespace Readable {
    class Stream {
      static Duplex(options: any): any;
      static PassThrough(options: any): any;
      // Circular reference from index.LikeStream.Readable.Stream
      static Stream: any;
      static Transform(options: any): any;
      addListener(type: any, listener: any): any;
      emit(type: any, ...args: any[]): any;
      eventNames(): any;
      getMaxListeners(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(type: any, listener: any): any;
      once(type: any, listener: any): any;
      pipe(dest: any, options: any): any;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      setMaxListeners(n: any): any;
    }
    namespace Stream {
      class Readable {
        // Too-deep object hierarchy from index.LikeStream.Readable.Stream.Readable
        static ReadableState: any;
        constructor(options: any);
        readable: any;
      }
      class Writable {
        // Too-deep object hierarchy from index.LikeStream.Readable.Stream.Writable
        static WritableState: any;
        constructor(options: any);
        writable: any;
      }
    }
    class Writable {
      static WritableState(options: any, stream: any, isDuplex: any): void;
      constructor(options: any);
      writable: any;
      addListener(type: any, listener: any): any;
      cork(): void;
      destroy(err: any, cb: any): any;
      emit(type: any, ...args: any[]): any;
      end(chunk: any, encoding: any, cb: any): any;
      eventNames(): any;
      getMaxListeners(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(type: any, listener: any): any;
      once(type: any, listener: any): any;
      pipe(): void;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      setDefaultEncoding(encoding: any): any;
      setMaxListeners(n: any): any;
      uncork(): void;
      write(chunk: any, encoding: any, cb: any): any;
    }
  }
  class Stream {
    static Duplex(options: any): any;
    static PassThrough(options: any): any;
    // Circular reference from index.LikeStream.Stream
    static Stream: any;
    static Transform(options: any): any;
    addListener(type: any, listener: any): any;
    emit(type: any, ...args: any[]): any;
    eventNames(): any;
    getMaxListeners(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    on(type: any, listener: any): any;
    once(type: any, listener: any): any;
    pipe(dest: any, options: any): any;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    removeAllListeners(type: any, ...args: any[]): any;
    removeListener(type: any, listener: any): any;
    setMaxListeners(n: any): any;
  }
  namespace Stream {
    class Readable {
      static ReadableState(options: any, stream: any): void;
      constructor(options: any);
      readable: any;
      addListener(ev: any, fn: any): any;
      destroy(err: any, cb: any): any;
      emit(type: any, ...args: any[]): any;
      eventNames(): any;
      getMaxListeners(): any;
      isPaused(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(ev: any, fn: any): any;
      once(type: any, listener: any): any;
      pause(): any;
      pipe(dest: any, pipeOpts: any): any;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      push(chunk: any, encoding: any): any;
      read(n: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      resume(): any;
      setEncoding(enc: any): any;
      setMaxListeners(n: any): any;
      unpipe(dest: any): any;
      unshift(chunk: any): any;
      wrap(stream: any): any;
    }
    class Writable {
      static WritableState(options: any, stream: any): void;
      constructor(options: any);
      writable: any;
      addListener(type: any, listener: any): any;
      cork(): void;
      destroy(err: any, cb: any): any;
      emit(type: any, ...args: any[]): any;
      end(chunk: any, encoding: any, cb: any): void;
      eventNames(): any;
      getMaxListeners(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(type: any, listener: any): any;
      once(type: any, listener: any): any;
      pipe(): void;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      setDefaultEncoding(encoding: any): any;
      setMaxListeners(n: any): any;
      uncork(): void;
      write(chunk: any, encoding: any, cb: any): any;
    }
  }
  class Writable {
    static WritableState(options: any, stream: any, isDuplex: any): void;
    constructor(options: any);
    writable: any;
    addListener(type: any, listener: any): any;
    cork(): void;
    destroy(err: any, cb: any): any;
    emit(type: any, ...args: any[]): any;
    end(chunk: any, encoding: any, cb: any): any;
    eventNames(): any;
    getMaxListeners(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    on(type: any, listener: any): any;
    once(type: any, listener: any): any;
    pipe(): void;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    removeAllListeners(type: any, ...args: any[]): any;
    removeListener(type: any, listener: any): any;
    setDefaultEncoding(encoding: any): any;
    setMaxListeners(n: any): any;
    uncork(): void;
    write(chunk: any, encoding: any, cb: any): any;
  }
}
export class ListStream {
  static Duplex(options: any): any;
  static PassThrough(options: any): any;
  static ReadableState(options: any, stream: any, isDuplex: any): void;
  static Transform(options: any): any;
  static finished(stream: any, opts: any, callback: any): any;
  static pipeline(...args: any[]): any;
  constructor(username: any, list: any, ...args: any[]);
  addListener(ev: any, fn: any): any;
  destroy(err: any, cb: any): any;
  emit(type: any, ...args: any[]): any;
  eventNames(): any;
  getMaxListeners(): any;
  isPaused(): any;
  listenerCount(type: any): any;
  listeners(type: any): any;
  on(ev: any, fn: any): any;
  once(type: any, listener: any): any;
  pause(): any;
  pipe(dest: any, pipeOpts: any): any;
  prependListener(type: any, listener: any): any;
  prependOnceListener(type: any, listener: any): any;
  push(chunk: any, encoding: any): any;
  read(n: any): any;
  removeAllListeners(ev: any, ...args: any[]): any;
  removeListener(ev: any, fn: any): any;
  resume(): any;
  setEncoding(enc: any): any;
  setMaxListeners(n: any): any;
  undefined(): any;
  unpipe(dest: any): any;
  unshift(chunk: any): any;
  wrap(stream: any): any;
}
export namespace ListStream {
  class Readable {
    static Duplex(options: any): any;
    static PassThrough(options: any): any;
    // Circular reference from index.ListStream.Readable
    static Readable: any;
    static ReadableState(options: any, stream: any, isDuplex: any): void;
    static Transform(options: any): any;
    static finished(stream: any, opts: any, callback: any): any;
    static pipeline(...args: any[]): any;
    constructor(options: any);
    readable: any;
    addListener(ev: any, fn: any): any;
    destroy(err: any, cb: any): any;
    emit(type: any, ...args: any[]): any;
    eventNames(): any;
    getMaxListeners(): any;
    isPaused(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    on(ev: any, fn: any): any;
    once(type: any, listener: any): any;
    pause(): any;
    pipe(dest: any, pipeOpts: any): any;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    push(chunk: any, encoding: any): any;
    read(n: any): any;
    removeAllListeners(ev: any, ...args: any[]): any;
    removeListener(ev: any, fn: any): any;
    resume(): any;
    setEncoding(enc: any): any;
    setMaxListeners(n: any): any;
    undefined(): any;
    unpipe(dest: any): any;
    unshift(chunk: any): any;
    wrap(stream: any): any;
  }
  namespace Readable {
    class Stream {
      static Duplex(options: any): any;
      static PassThrough(options: any): any;
      // Circular reference from index.ListStream.Readable.Stream
      static Stream: any;
      static Transform(options: any): any;
      addListener(type: any, listener: any): any;
      emit(type: any, ...args: any[]): any;
      eventNames(): any;
      getMaxListeners(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(type: any, listener: any): any;
      once(type: any, listener: any): any;
      pipe(dest: any, options: any): any;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      setMaxListeners(n: any): any;
    }
    namespace Stream {
      class Readable {
        // Too-deep object hierarchy from index.ListStream.Readable.Stream.Readable
        static ReadableState: any;
        constructor(options: any);
        readable: any;
      }
      class Writable {
        // Too-deep object hierarchy from index.ListStream.Readable.Stream.Writable
        static WritableState: any;
        constructor(options: any);
        writable: any;
      }
    }
    class Writable {
      static WritableState(options: any, stream: any, isDuplex: any): void;
      constructor(options: any);
      writable: any;
      addListener(type: any, listener: any): any;
      cork(): void;
      destroy(err: any, cb: any): any;
      emit(type: any, ...args: any[]): any;
      end(chunk: any, encoding: any, cb: any): any;
      eventNames(): any;
      getMaxListeners(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(type: any, listener: any): any;
      once(type: any, listener: any): any;
      pipe(): void;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      setDefaultEncoding(encoding: any): any;
      setMaxListeners(n: any): any;
      uncork(): void;
      write(chunk: any, encoding: any, cb: any): any;
    }
  }
  class Stream {
    static Duplex(options: any): any;
    static PassThrough(options: any): any;
    // Circular reference from index.ListStream.Stream
    static Stream: any;
    static Transform(options: any): any;
    addListener(type: any, listener: any): any;
    emit(type: any, ...args: any[]): any;
    eventNames(): any;
    getMaxListeners(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    on(type: any, listener: any): any;
    once(type: any, listener: any): any;
    pipe(dest: any, options: any): any;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    removeAllListeners(type: any, ...args: any[]): any;
    removeListener(type: any, listener: any): any;
    setMaxListeners(n: any): any;
  }
  namespace Stream {
    class Readable {
      static ReadableState(options: any, stream: any): void;
      constructor(options: any);
      readable: any;
      addListener(ev: any, fn: any): any;
      destroy(err: any, cb: any): any;
      emit(type: any, ...args: any[]): any;
      eventNames(): any;
      getMaxListeners(): any;
      isPaused(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(ev: any, fn: any): any;
      once(type: any, listener: any): any;
      pause(): any;
      pipe(dest: any, pipeOpts: any): any;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      push(chunk: any, encoding: any): any;
      read(n: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      resume(): any;
      setEncoding(enc: any): any;
      setMaxListeners(n: any): any;
      unpipe(dest: any): any;
      unshift(chunk: any): any;
      wrap(stream: any): any;
    }
    class Writable {
      static WritableState(options: any, stream: any): void;
      constructor(options: any);
      writable: any;
      addListener(type: any, listener: any): any;
      cork(): void;
      destroy(err: any, cb: any): any;
      emit(type: any, ...args: any[]): any;
      end(chunk: any, encoding: any, cb: any): void;
      eventNames(): any;
      getMaxListeners(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(type: any, listener: any): any;
      once(type: any, listener: any): any;
      pipe(): void;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      setDefaultEncoding(encoding: any): any;
      setMaxListeners(n: any): any;
      uncork(): void;
      write(chunk: any, encoding: any, cb: any): any;
    }
  }
  class Writable {
    static WritableState(options: any, stream: any, isDuplex: any): void;
    constructor(options: any);
    writable: any;
    addListener(type: any, listener: any): any;
    cork(): void;
    destroy(err: any, cb: any): any;
    emit(type: any, ...args: any[]): any;
    end(chunk: any, encoding: any, cb: any): any;
    eventNames(): any;
    getMaxListeners(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    on(type: any, listener: any): any;
    once(type: any, listener: any): any;
    pipe(): void;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    removeAllListeners(type: any, ...args: any[]): any;
    removeListener(type: any, listener: any): any;
    setDefaultEncoding(encoding: any): any;
    setMaxListeners(n: any): any;
    uncork(): void;
    write(chunk: any, encoding: any, cb: any): any;
  }
}
export class MediaTimelineStream {
  static Duplex(options: any): any;
  static PassThrough(options: any): any;
  static ReadableState(options: any, stream: any, isDuplex: any): void;
  static Transform(options: any): any;
  static finished(stream: any, opts: any, callback: any): any;
  static pipeline(...args: any[]): any;
  constructor(username: any, ...args: any[]);
  addListener(ev: any, fn: any): any;
  destroy(err: any, cb: any): any;
  emit(type: any, ...args: any[]): any;
  eventNames(): any;
  getMaxListeners(): any;
  isPaused(): any;
  listenerCount(type: any): any;
  listeners(type: any): any;
  on(ev: any, fn: any): any;
  once(type: any, listener: any): any;
  pause(): any;
  pipe(dest: any, pipeOpts: any): any;
  prependListener(type: any, listener: any): any;
  prependOnceListener(type: any, listener: any): any;
  push(chunk: any, encoding: any): any;
  read(n: any): any;
  removeAllListeners(ev: any, ...args: any[]): any;
  removeListener(ev: any, fn: any): any;
  resume(): any;
  setEncoding(enc: any): any;
  setMaxListeners(n: any): any;
  undefined(): any;
  unpipe(dest: any): any;
  unshift(chunk: any): any;
  wrap(stream: any): any;
}
export namespace MediaTimelineStream {
  class Readable {
    static Duplex(options: any): any;
    static PassThrough(options: any): any;
    // Circular reference from index.MediaTimelineStream.Readable
    static Readable: any;
    static ReadableState(options: any, stream: any, isDuplex: any): void;
    static Transform(options: any): any;
    static finished(stream: any, opts: any, callback: any): any;
    static pipeline(...args: any[]): any;
    constructor(options: any);
    readable: any;
    addListener(ev: any, fn: any): any;
    destroy(err: any, cb: any): any;
    emit(type: any, ...args: any[]): any;
    eventNames(): any;
    getMaxListeners(): any;
    isPaused(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    on(ev: any, fn: any): any;
    once(type: any, listener: any): any;
    pause(): any;
    pipe(dest: any, pipeOpts: any): any;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    push(chunk: any, encoding: any): any;
    read(n: any): any;
    removeAllListeners(ev: any, ...args: any[]): any;
    removeListener(ev: any, fn: any): any;
    resume(): any;
    setEncoding(enc: any): any;
    setMaxListeners(n: any): any;
    undefined(): any;
    unpipe(dest: any): any;
    unshift(chunk: any): any;
    wrap(stream: any): any;
  }
  namespace Readable {
    class Stream {
      static Duplex(options: any): any;
      static PassThrough(options: any): any;
      // Circular reference from index.MediaTimelineStream.Readable.Stream
      static Stream: any;
      static Transform(options: any): any;
      addListener(type: any, listener: any): any;
      emit(type: any, ...args: any[]): any;
      eventNames(): any;
      getMaxListeners(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(type: any, listener: any): any;
      once(type: any, listener: any): any;
      pipe(dest: any, options: any): any;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      setMaxListeners(n: any): any;
    }
    namespace Stream {
      class Readable {
        // Too-deep object hierarchy from index.MediaTimelineStream.Readable.Stream.Readable
        static ReadableState: any;
        constructor(options: any);
        readable: any;
      }
      class Writable {
        // Too-deep object hierarchy from index.MediaTimelineStream.Readable.Stream.Writable
        static WritableState: any;
        constructor(options: any);
        writable: any;
      }
    }
    class Writable {
      static WritableState(options: any, stream: any, isDuplex: any): void;
      constructor(options: any);
      writable: any;
      addListener(type: any, listener: any): any;
      cork(): void;
      destroy(err: any, cb: any): any;
      emit(type: any, ...args: any[]): any;
      end(chunk: any, encoding: any, cb: any): any;
      eventNames(): any;
      getMaxListeners(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(type: any, listener: any): any;
      once(type: any, listener: any): any;
      pipe(): void;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      setDefaultEncoding(encoding: any): any;
      setMaxListeners(n: any): any;
      uncork(): void;
      write(chunk: any, encoding: any, cb: any): any;
    }
  }
  class Stream {
    static Duplex(options: any): any;
    static PassThrough(options: any): any;
    // Circular reference from index.MediaTimelineStream.Stream
    static Stream: any;
    static Transform(options: any): any;
    addListener(type: any, listener: any): any;
    emit(type: any, ...args: any[]): any;
    eventNames(): any;
    getMaxListeners(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    on(type: any, listener: any): any;
    once(type: any, listener: any): any;
    pipe(dest: any, options: any): any;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    removeAllListeners(type: any, ...args: any[]): any;
    removeListener(type: any, listener: any): any;
    setMaxListeners(n: any): any;
  }
  namespace Stream {
    class Readable {
      static ReadableState(options: any, stream: any): void;
      constructor(options: any);
      readable: any;
      addListener(ev: any, fn: any): any;
      destroy(err: any, cb: any): any;
      emit(type: any, ...args: any[]): any;
      eventNames(): any;
      getMaxListeners(): any;
      isPaused(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(ev: any, fn: any): any;
      once(type: any, listener: any): any;
      pause(): any;
      pipe(dest: any, pipeOpts: any): any;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      push(chunk: any, encoding: any): any;
      read(n: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      resume(): any;
      setEncoding(enc: any): any;
      setMaxListeners(n: any): any;
      unpipe(dest: any): any;
      unshift(chunk: any): any;
      wrap(stream: any): any;
    }
    class Writable {
      static WritableState(options: any, stream: any): void;
      constructor(options: any);
      writable: any;
      addListener(type: any, listener: any): any;
      cork(): void;
      destroy(err: any, cb: any): any;
      emit(type: any, ...args: any[]): any;
      end(chunk: any, encoding: any, cb: any): void;
      eventNames(): any;
      getMaxListeners(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(type: any, listener: any): any;
      once(type: any, listener: any): any;
      pipe(): void;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      setDefaultEncoding(encoding: any): any;
      setMaxListeners(n: any): any;
      uncork(): void;
      write(chunk: any, encoding: any, cb: any): any;
    }
  }
  class Writable {
    static WritableState(options: any, stream: any, isDuplex: any): void;
    constructor(options: any);
    writable: any;
    addListener(type: any, listener: any): any;
    cork(): void;
    destroy(err: any, cb: any): any;
    emit(type: any, ...args: any[]): any;
    end(chunk: any, encoding: any, cb: any): any;
    eventNames(): any;
    getMaxListeners(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    on(type: any, listener: any): any;
    once(type: any, listener: any): any;
    pipe(): void;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    removeAllListeners(type: any, ...args: any[]): any;
    removeListener(type: any, listener: any): any;
    setDefaultEncoding(encoding: any): any;
    setMaxListeners(n: any): any;
    uncork(): void;
    write(chunk: any, encoding: any, cb: any): any;
  }
}
export class ThreadedConversationStream {
  static Duplex(options: any): any;
  static PassThrough(options: any): any;
  static ReadableState(options: any, stream: any, isDuplex: any): void;
  static Transform(options: any): any;
  static finished(stream: any, opts: any, callback: any): any;
  static pipeline(...args: any[]): any;
  constructor(id: any, ...args: any[]);
  addListener(ev: any, fn: any): any;
  destroy(err: any, cb: any): any;
  emit(type: any, ...args: any[]): any;
  eventNames(): any;
  getMaxListeners(): any;
  isPaused(): any;
  listenerCount(type: any): any;
  listeners(type: any): any;
  on(ev: any, fn: any): any;
  once(type: any, listener: any): any;
  pause(): any;
  pipe(dest: any, pipeOpts: any): any;
  prependListener(type: any, listener: any): any;
  prependOnceListener(type: any, listener: any): any;
  push(chunk: any, encoding: any): any;
  read(n: any): any;
  removeAllListeners(ev: any, ...args: any[]): any;
  removeListener(ev: any, fn: any): any;
  resume(): any;
  setEncoding(enc: any): any;
  setMaxListeners(n: any): any;
  undefined(): any;
  unpipe(dest: any): any;
  unshift(chunk: any): any;
  wrap(stream: any): any;
}
export namespace ThreadedConversationStream {
  class Readable {
    static Duplex(options: any): any;
    static PassThrough(options: any): any;
    // Circular reference from index.ThreadedConversationStream.Readable
    static Readable: any;
    static ReadableState(options: any, stream: any, isDuplex: any): void;
    static Transform(options: any): any;
    static finished(stream: any, opts: any, callback: any): any;
    static pipeline(...args: any[]): any;
    constructor(options: any);
    readable: any;
    addListener(ev: any, fn: any): any;
    destroy(err: any, cb: any): any;
    emit(type: any, ...args: any[]): any;
    eventNames(): any;
    getMaxListeners(): any;
    isPaused(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    on(ev: any, fn: any): any;
    once(type: any, listener: any): any;
    pause(): any;
    pipe(dest: any, pipeOpts: any): any;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    push(chunk: any, encoding: any): any;
    read(n: any): any;
    removeAllListeners(ev: any, ...args: any[]): any;
    removeListener(ev: any, fn: any): any;
    resume(): any;
    setEncoding(enc: any): any;
    setMaxListeners(n: any): any;
    undefined(): any;
    unpipe(dest: any): any;
    unshift(chunk: any): any;
    wrap(stream: any): any;
  }
  namespace Readable {
    class Stream {
      static Duplex(options: any): any;
      static PassThrough(options: any): any;
      // Circular reference from index.ThreadedConversationStream.Readable.Stream
      static Stream: any;
      static Transform(options: any): any;
      addListener(type: any, listener: any): any;
      emit(type: any, ...args: any[]): any;
      eventNames(): any;
      getMaxListeners(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(type: any, listener: any): any;
      once(type: any, listener: any): any;
      pipe(dest: any, options: any): any;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      setMaxListeners(n: any): any;
    }
    namespace Stream {
      class Readable {
        // Too-deep object hierarchy from index.ThreadedConversationStream.Readable.Stream.Readable
        static ReadableState: any;
        constructor(options: any);
        readable: any;
      }
      class Writable {
        // Too-deep object hierarchy from index.ThreadedConversationStream.Readable.Stream.Writable
        static WritableState: any;
        constructor(options: any);
        writable: any;
      }
    }
    class Writable {
      static WritableState(options: any, stream: any, isDuplex: any): void;
      constructor(options: any);
      writable: any;
      addListener(type: any, listener: any): any;
      cork(): void;
      destroy(err: any, cb: any): any;
      emit(type: any, ...args: any[]): any;
      end(chunk: any, encoding: any, cb: any): any;
      eventNames(): any;
      getMaxListeners(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(type: any, listener: any): any;
      once(type: any, listener: any): any;
      pipe(): void;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      setDefaultEncoding(encoding: any): any;
      setMaxListeners(n: any): any;
      uncork(): void;
      write(chunk: any, encoding: any, cb: any): any;
    }
  }
  class Stream {
    static Duplex(options: any): any;
    static PassThrough(options: any): any;
    // Circular reference from index.ThreadedConversationStream.Stream
    static Stream: any;
    static Transform(options: any): any;
    addListener(type: any, listener: any): any;
    emit(type: any, ...args: any[]): any;
    eventNames(): any;
    getMaxListeners(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    on(type: any, listener: any): any;
    once(type: any, listener: any): any;
    pipe(dest: any, options: any): any;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    removeAllListeners(type: any, ...args: any[]): any;
    removeListener(type: any, listener: any): any;
    setMaxListeners(n: any): any;
  }
  namespace Stream {
    class Readable {
      static ReadableState(options: any, stream: any): void;
      constructor(options: any);
      readable: any;
      addListener(ev: any, fn: any): any;
      destroy(err: any, cb: any): any;
      emit(type: any, ...args: any[]): any;
      eventNames(): any;
      getMaxListeners(): any;
      isPaused(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(ev: any, fn: any): any;
      once(type: any, listener: any): any;
      pause(): any;
      pipe(dest: any, pipeOpts: any): any;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      push(chunk: any, encoding: any): any;
      read(n: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      resume(): any;
      setEncoding(enc: any): any;
      setMaxListeners(n: any): any;
      unpipe(dest: any): any;
      unshift(chunk: any): any;
      wrap(stream: any): any;
    }
    class Writable {
      static WritableState(options: any, stream: any): void;
      constructor(options: any);
      writable: any;
      addListener(type: any, listener: any): any;
      cork(): void;
      destroy(err: any, cb: any): any;
      emit(type: any, ...args: any[]): any;
      end(chunk: any, encoding: any, cb: any): void;
      eventNames(): any;
      getMaxListeners(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(type: any, listener: any): any;
      once(type: any, listener: any): any;
      pipe(): void;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      setDefaultEncoding(encoding: any): any;
      setMaxListeners(n: any): any;
      uncork(): void;
      write(chunk: any, encoding: any, cb: any): any;
    }
  }
  class Writable {
    static WritableState(options: any, stream: any, isDuplex: any): void;
    constructor(options: any);
    writable: any;
    addListener(type: any, listener: any): any;
    cork(): void;
    destroy(err: any, cb: any): any;
    emit(type: any, ...args: any[]): any;
    end(chunk: any, encoding: any, cb: any): any;
    eventNames(): any;
    getMaxListeners(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    on(type: any, listener: any): any;
    once(type: any, listener: any): any;
    pipe(): void;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    removeAllListeners(type: any, ...args: any[]): any;
    removeListener(type: any, listener: any): any;
    setDefaultEncoding(encoding: any): any;
    setMaxListeners(n: any): any;
    uncork(): void;
    write(chunk: any, encoding: any, cb: any): any;
  }
}
export class TimelineStream {
  static Duplex(options: any): any;
  static PassThrough(options: any): any;
  static ReadableState(options: any, stream: any, isDuplex: any): void;
  static Transform(options: any): any;
  static finished(stream: any, opts: any, callback: any): any;
  static pipeline(...args: any[]): any;
  constructor(username: any, ...args: any[]);
  addListener(ev: any, fn: any): any;
  destroy(err: any, cb: any): any;
  emit(type: any, ...args: any[]): any;
  eventNames(): any;
  getMaxListeners(): any;
  isPaused(): any;
  listenerCount(type: any): any;
  listeners(type: any): any;
  on(ev: any, fn: any): any;
  once(type: any, listener: any): any;
  pause(): any;
  pipe(dest: any, pipeOpts: any): any;
  prependListener(type: any, listener: any): any;
  prependOnceListener(type: any, listener: any): any;
  push(chunk: any, encoding: any): any;
  read(n: any): any;
  removeAllListeners(ev: any, ...args: any[]): any;
  removeListener(ev: any, fn: any): any;
  resume(): any;
  setEncoding(enc: any): any;
  setMaxListeners(n: any): any;
  undefined(): any;
  unpipe(dest: any): any;
  unshift(chunk: any): any;
  wrap(stream: any): any;
}
export namespace TimelineStream {
  class Readable {
    static Duplex(options: any): any;
    static PassThrough(options: any): any;
    // Circular reference from index.TimelineStream.Readable
    static Readable: any;
    static ReadableState(options: any, stream: any, isDuplex: any): void;
    static Transform(options: any): any;
    static finished(stream: any, opts: any, callback: any): any;
    static pipeline(...args: any[]): any;
    constructor(options: any);
    readable: any;
    addListener(ev: any, fn: any): any;
    destroy(err: any, cb: any): any;
    emit(type: any, ...args: any[]): any;
    eventNames(): any;
    getMaxListeners(): any;
    isPaused(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    on(ev: any, fn: any): any;
    once(type: any, listener: any): any;
    pause(): any;
    pipe(dest: any, pipeOpts: any): any;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    push(chunk: any, encoding: any): any;
    read(n: any): any;
    removeAllListeners(ev: any, ...args: any[]): any;
    removeListener(ev: any, fn: any): any;
    resume(): any;
    setEncoding(enc: any): any;
    setMaxListeners(n: any): any;
    undefined(): any;
    unpipe(dest: any): any;
    unshift(chunk: any): any;
    wrap(stream: any): any;
  }
  namespace Readable {
    class Stream {
      static Duplex(options: any): any;
      static PassThrough(options: any): any;
      // Circular reference from index.TimelineStream.Readable.Stream
      static Stream: any;
      static Transform(options: any): any;
      addListener(type: any, listener: any): any;
      emit(type: any, ...args: any[]): any;
      eventNames(): any;
      getMaxListeners(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(type: any, listener: any): any;
      once(type: any, listener: any): any;
      pipe(dest: any, options: any): any;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      setMaxListeners(n: any): any;
    }
    namespace Stream {
      class Readable {
        // Too-deep object hierarchy from index.TimelineStream.Readable.Stream.Readable
        static ReadableState: any;
        constructor(options: any);
        readable: any;
      }
      class Writable {
        // Too-deep object hierarchy from index.TimelineStream.Readable.Stream.Writable
        static WritableState: any;
        constructor(options: any);
        writable: any;
      }
    }
    class Writable {
      static WritableState(options: any, stream: any, isDuplex: any): void;
      constructor(options: any);
      writable: any;
      addListener(type: any, listener: any): any;
      cork(): void;
      destroy(err: any, cb: any): any;
      emit(type: any, ...args: any[]): any;
      end(chunk: any, encoding: any, cb: any): any;
      eventNames(): any;
      getMaxListeners(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(type: any, listener: any): any;
      once(type: any, listener: any): any;
      pipe(): void;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      setDefaultEncoding(encoding: any): any;
      setMaxListeners(n: any): any;
      uncork(): void;
      write(chunk: any, encoding: any, cb: any): any;
    }
  }
  class Stream {
    static Duplex(options: any): any;
    static PassThrough(options: any): any;
    // Circular reference from index.TimelineStream.Stream
    static Stream: any;
    static Transform(options: any): any;
    addListener(type: any, listener: any): any;
    emit(type: any, ...args: any[]): any;
    eventNames(): any;
    getMaxListeners(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    on(type: any, listener: any): any;
    once(type: any, listener: any): any;
    pipe(dest: any, options: any): any;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    removeAllListeners(type: any, ...args: any[]): any;
    removeListener(type: any, listener: any): any;
    setMaxListeners(n: any): any;
  }
  namespace Stream {
    class Readable {
      static ReadableState(options: any, stream: any): void;
      constructor(options: any);
      readable: any;
      addListener(ev: any, fn: any): any;
      destroy(err: any, cb: any): any;
      emit(type: any, ...args: any[]): any;
      eventNames(): any;
      getMaxListeners(): any;
      isPaused(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(ev: any, fn: any): any;
      once(type: any, listener: any): any;
      pause(): any;
      pipe(dest: any, pipeOpts: any): any;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      push(chunk: any, encoding: any): any;
      read(n: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      resume(): any;
      setEncoding(enc: any): any;
      setMaxListeners(n: any): any;
      unpipe(dest: any): any;
      unshift(chunk: any): any;
      wrap(stream: any): any;
    }
    class Writable {
      static WritableState(options: any, stream: any): void;
      constructor(options: any);
      writable: any;
      addListener(type: any, listener: any): any;
      cork(): void;
      destroy(err: any, cb: any): any;
      emit(type: any, ...args: any[]): any;
      end(chunk: any, encoding: any, cb: any): void;
      eventNames(): any;
      getMaxListeners(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(type: any, listener: any): any;
      once(type: any, listener: any): any;
      pipe(): void;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      setDefaultEncoding(encoding: any): any;
      setMaxListeners(n: any): any;
      uncork(): void;
      write(chunk: any, encoding: any, cb: any): any;
    }
  }
  class Writable {
    static WritableState(options: any, stream: any, isDuplex: any): void;
    constructor(options: any);
    writable: any;
    addListener(type: any, listener: any): any;
    cork(): void;
    destroy(err: any, cb: any): any;
    emit(type: any, ...args: any[]): any;
    end(chunk: any, encoding: any, cb: any): any;
    eventNames(): any;
    getMaxListeners(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    on(type: any, listener: any): any;
    once(type: any, listener: any): any;
    pipe(): void;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    removeAllListeners(type: any, ...args: any[]): any;
    removeListener(type: any, listener: any): any;
    setDefaultEncoding(encoding: any): any;
    setMaxListeners(n: any): any;
    uncork(): void;
    write(chunk: any, encoding: any, cb: any): any;
  }
}
export class TweetStream {
  static Duplex(options: any): any;
  static PassThrough(options: any): any;
  static ReadableState(options: any, stream: any, isDuplex: any): void;
  static Transform(options: any): any;
  static finished(stream: any, opts: any, callback: any): any;
  static pipeline(...args: any[]): any;
  constructor(query: any, type: any, ...args: any[]);
  addListener(ev: any, fn: any): any;
  destroy(err: any, cb: any): any;
  emit(type: any, ...args: any[]): any;
  eventNames(): any;
  getMaxListeners(): any;
  isPaused(): any;
  listenerCount(type: any): any;
  listeners(type: any): any;
  on(ev: any, fn: any): any;
  once(type: any, listener: any): any;
  pause(): any;
  pipe(dest: any, pipeOpts: any): any;
  prependListener(type: any, listener: any): any;
  prependOnceListener(type: any, listener: any): any;
  push(chunk: any, encoding: any): any;
  read(n: any): any;
  removeAllListeners(ev: any, ...args: any[]): any;
  removeListener(ev: any, fn: any): any;
  resume(): any;
  setEncoding(enc: any): any;
  setMaxListeners(n: any): any;
  undefined(): any;
  unpipe(dest: any): any;
  unshift(chunk: any): any;
  wrap(stream: any): any;
}
export namespace TweetStream {
  class Readable {
    static Duplex(options: any): any;
    static PassThrough(options: any): any;
    // Circular reference from index.TweetStream.Readable
    static Readable: any;
    static ReadableState(options: any, stream: any, isDuplex: any): void;
    static Transform(options: any): any;
    static finished(stream: any, opts: any, callback: any): any;
    static pipeline(...args: any[]): any;
    constructor(options: any);
    readable: any;
    addListener(ev: any, fn: any): any;
    destroy(err: any, cb: any): any;
    emit(type: any, ...args: any[]): any;
    eventNames(): any;
    getMaxListeners(): any;
    isPaused(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    on(ev: any, fn: any): any;
    once(type: any, listener: any): any;
    pause(): any;
    pipe(dest: any, pipeOpts: any): any;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    push(chunk: any, encoding: any): any;
    read(n: any): any;
    removeAllListeners(ev: any, ...args: any[]): any;
    removeListener(ev: any, fn: any): any;
    resume(): any;
    setEncoding(enc: any): any;
    setMaxListeners(n: any): any;
    undefined(): any;
    unpipe(dest: any): any;
    unshift(chunk: any): any;
    wrap(stream: any): any;
  }
  namespace Readable {
    class Stream {
      static Duplex(options: any): any;
      static PassThrough(options: any): any;
      // Circular reference from index.TweetStream.Readable.Stream
      static Stream: any;
      static Transform(options: any): any;
      addListener(type: any, listener: any): any;
      emit(type: any, ...args: any[]): any;
      eventNames(): any;
      getMaxListeners(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(type: any, listener: any): any;
      once(type: any, listener: any): any;
      pipe(dest: any, options: any): any;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      setMaxListeners(n: any): any;
    }
    namespace Stream {
      class Readable {
        // Too-deep object hierarchy from index.TweetStream.Readable.Stream.Readable
        static ReadableState: any;
        constructor(options: any);
        readable: any;
      }
      class Writable {
        // Too-deep object hierarchy from index.TweetStream.Readable.Stream.Writable
        static WritableState: any;
        constructor(options: any);
        writable: any;
      }
    }
    class Writable {
      static WritableState(options: any, stream: any, isDuplex: any): void;
      constructor(options: any);
      writable: any;
      addListener(type: any, listener: any): any;
      cork(): void;
      destroy(err: any, cb: any): any;
      emit(type: any, ...args: any[]): any;
      end(chunk: any, encoding: any, cb: any): any;
      eventNames(): any;
      getMaxListeners(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(type: any, listener: any): any;
      once(type: any, listener: any): any;
      pipe(): void;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      setDefaultEncoding(encoding: any): any;
      setMaxListeners(n: any): any;
      uncork(): void;
      write(chunk: any, encoding: any, cb: any): any;
    }
  }
  class Stream {
    static Duplex(options: any): any;
    static PassThrough(options: any): any;
    // Circular reference from index.TweetStream.Stream
    static Stream: any;
    static Transform(options: any): any;
    addListener(type: any, listener: any): any;
    emit(type: any, ...args: any[]): any;
    eventNames(): any;
    getMaxListeners(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    on(type: any, listener: any): any;
    once(type: any, listener: any): any;
    pipe(dest: any, options: any): any;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    removeAllListeners(type: any, ...args: any[]): any;
    removeListener(type: any, listener: any): any;
    setMaxListeners(n: any): any;
  }
  namespace Stream {
    class Readable {
      static ReadableState(options: any, stream: any): void;
      constructor(options: any);
      readable: any;
      addListener(ev: any, fn: any): any;
      destroy(err: any, cb: any): any;
      emit(type: any, ...args: any[]): any;
      eventNames(): any;
      getMaxListeners(): any;
      isPaused(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(ev: any, fn: any): any;
      once(type: any, listener: any): any;
      pause(): any;
      pipe(dest: any, pipeOpts: any): any;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      push(chunk: any, encoding: any): any;
      read(n: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      resume(): any;
      setEncoding(enc: any): any;
      setMaxListeners(n: any): any;
      unpipe(dest: any): any;
      unshift(chunk: any): any;
      wrap(stream: any): any;
    }
    class Writable {
      static WritableState(options: any, stream: any): void;
      constructor(options: any);
      writable: any;
      addListener(type: any, listener: any): any;
      cork(): void;
      destroy(err: any, cb: any): any;
      emit(type: any, ...args: any[]): any;
      end(chunk: any, encoding: any, cb: any): void;
      eventNames(): any;
      getMaxListeners(): any;
      listenerCount(type: any): any;
      listeners(type: any): any;
      on(type: any, listener: any): any;
      once(type: any, listener: any): any;
      pipe(): void;
      prependListener(type: any, listener: any): any;
      prependOnceListener(type: any, listener: any): any;
      removeAllListeners(type: any, ...args: any[]): any;
      removeListener(type: any, listener: any): any;
      setDefaultEncoding(encoding: any): any;
      setMaxListeners(n: any): any;
      uncork(): void;
      write(chunk: any, encoding: any, cb: any): any;
    }
  }
  class Writable {
    static WritableState(options: any, stream: any, isDuplex: any): void;
    constructor(options: any);
    writable: any;
    addListener(type: any, listener: any): any;
    cork(): void;
    destroy(err: any, cb: any): any;
    emit(type: any, ...args: any[]): any;
    end(chunk: any, encoding: any, cb: any): any;
    eventNames(): any;
    getMaxListeners(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    on(type: any, listener: any): any;
    once(type: any, listener: any): any;
    pipe(): void;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    removeAllListeners(type: any, ...args: any[]): any;
    removeListener(type: any, listener: any): any;
    setDefaultEncoding(encoding: any): any;
    setMaxListeners(n: any): any;
    uncork(): void;
    write(chunk: any, encoding: any, cb: any): any;
  }
}
export function getUserProfile(username: any): any;