import { describe, it, expect } from "vitest";
import { convertTimeToSeconds } from "../timeUtils";

describe("convertTimeToSeconds", () => {
  it("converts minutes:seconds format correctly", () => {
    expect(convertTimeToSeconds("14:57.44")).toBe(14 * 60 + 57.44);
    expect(convertTimeToSeconds("4:04.94")).toBe(4 * 60 + 4.94);
    expect(convertTimeToSeconds("31:00")).toBe(31 * 60);
  });

  it("converts hours:minutes:seconds format correctly", () => {
    expect(convertTimeToSeconds("1:07:30")).toBe(1 * 3600 + 7 * 60 + 30);
    expect(convertTimeToSeconds("2:15:45")).toBe(2 * 3600 + 15 * 60 + 45);
  });

  it("handles invalid inputs gracefully", () => {
    expect(convertTimeToSeconds("")).toBe(0);
    expect(convertTimeToSeconds("invalid")).toBe(0);
  });
});
