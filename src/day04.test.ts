import { day04 } from "./day04"
import { describe, test, expect } from "@jest/globals"

describe("Day 4", () => {
    test("part 1", () => {
        expect(day04.part1(input)).toEqual("2")
    })
    test("part 2", () => {
        expect(day04.part2(input)).toEqual("4")
    })
})

const input = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`
