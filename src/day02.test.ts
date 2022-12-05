import {describe, test, expect } from "@jest/globals"
import { day02 } from "./day02"

describe("Day02", () => {
    test("part 1", () => {
        expect(day02.part1(input)).toEqual("15")
    })
})

const input =
`A Y
B X
C Z`