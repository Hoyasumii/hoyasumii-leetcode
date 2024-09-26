import { test, expect } from "bun:test";
import { createHelloWorld } from "./2667. Create Hello World Function";

test("Hello World 1", () => {
  expect(createHelloWorld()()).toBe("Hello World");
});

test("Hello World 2", () => {
  expect(createHelloWorld()({}, null, 42)).toBe("Hello World");
});
