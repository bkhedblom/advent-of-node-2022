import { day03 } from "./day03"
import {describe, test, expect } from "@jest/globals"

describe("Day01", () => {
    test("part 1", () => {
        expect(day03.part1(input)).toEqual("157")
    })
})

const input =
`vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`