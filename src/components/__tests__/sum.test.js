import { sum } from "../sum";
test("Sum function should calculate sum of the two numbers", () => {
  const result = sum(3, 6);
  expect(result).toBe(9);
});
