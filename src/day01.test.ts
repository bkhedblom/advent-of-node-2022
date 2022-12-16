import { day01 } from "./day01"
import { describe, test, expect } from "@jest/globals"

describe("Day01", () => {
    test("part 1", () => {
        expect(day01.part1(input)).toEqual("24000")
    })
    test("part 2", () => {
        expect(day01.part2(input)).toEqual("45000")
    })
})

const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`
