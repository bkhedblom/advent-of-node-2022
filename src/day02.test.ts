import { describe, test, expect } from "@jest/globals"
import { day02 } from "./day02"

describe("Day 2", () => {
    test("part 1", () => {
        expect(day02.part1(input)).toEqual("15")
    })
    test("part 2", () => {
        expect(day02.part2(input)).toEqual("12")
    })
})

const input = `A Y
B X
C Z`
