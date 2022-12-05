import { day05 } from "./day05"
import {describe, test, expect } from "@jest/globals"

describe("Day01", () => {
    test("part 1", () => {
        expect(day05.part1(input)).toEqual("CMZ")
    })
})

const input =
`    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`