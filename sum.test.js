import { sum } from "./sum.js";

describe("test for sum ", () => {
  test("adds 2 + 2 = 4", () => {
    expect(sum(2, 2)).toBe(4);
  });

  test("adds 2 + 2 = 4", () => {
    expect(sum(-1, 2)).toBe(1);
  });
});
