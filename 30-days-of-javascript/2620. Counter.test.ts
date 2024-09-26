import { test, expect } from "bun:test";
import { createCounter } from "./2620. Counter";

test("3 call. Initial value -> 10", () => {
  const counter = createCounter(10);
  expect([counter(), counter(), counter()]).toStrictEqual([10, 11, 12])
});
