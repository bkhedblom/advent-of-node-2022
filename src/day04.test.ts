import { day04 } from "./day04"
import {describe, test, expect } from "@jest/globals"

describe("Day01", () => {
    test("part 1", () => {
        expect(day04.part1(input)).toEqual("2")
    })
})

const input =
`2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`