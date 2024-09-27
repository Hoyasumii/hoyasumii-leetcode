interface Array<T = any> {
  last(): T | -1;
}

Array.prototype.last = function () {
  if (this.length === 0) return -1;
  return this[this.length - 1];
};
