import { hasUncaughtExceptionCaptureCallback } from "process";
import { sum } from "../sum"

test("The function should return sum of two numbers", () => {
    const result = sum(10,5);
    //Assertion
    expect(result).toBe(15);
})