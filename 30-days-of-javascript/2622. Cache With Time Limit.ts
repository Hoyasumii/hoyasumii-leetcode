class TimeLimitedCache {
  private cache: Record<number, number> = {};
  private timeLimitCache: Record<string, any> = {};

  set(key: number, value: number, duration: number): boolean {
    let exists = false;

    if (key in this.cache) {
      clearTimeout(this.timeLimitCache[key]);
      exists = true;
    }
    this.cache[key] = value;

    this.timeLimitCache[key] = setTimeout(() => {
      delete this.cache[key];
      delete this.timeLimitCache[key];
    }, duration);

    return exists;
  }

  get(key: number): number {
    return this.cache[key] || -1;
  }

  count(): number {
    return Object.keys(this.cache).length;
  }
}
