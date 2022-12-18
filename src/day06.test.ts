import { describe, test, expect } from "@jest/globals"
import { day06 } from "./day06"

describe("Day 06", () => {
    describe("part 1", () => {
        test("mjqjpqmgbljsphdztnvjfqwrcgsmlb", () => {
            expect(day06.part1("mjqjpqmgbljsphdztnvjfqwrcgsmlb")).toEqual("7")
        })
        test("bvwbjplbgvbhsrlpgdmjqwftvncz", () => {
            expect(day06.part1("bvwbjplbgvbhsrlpgdmjqwftvncz")).toEqual("5")
        })
        test("nppdvjthqldpwncqszvftbrmjlhg", () => {
            expect(day06.part1("nppdvjthqldpwncqszvftbrmjlhg")).toEqual("6")
        })
        test("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", () => {
            expect(day06.part1("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg")).toEqual(
                "10",
            )
        })
        test("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", () => {
            expect(day06.part1("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw")).toEqual(
                "11",
            )
        })
    })
    describe("part 2", () => {
        test("mjqjpqmgbljsphdztnvjfqwrcgsmlb", () => {
            expect(day06.part2("mjqjpqmgbljsphdztnvjfqwrcgsmlb")).toEqual("19")
        })
        test("bvwbjplbgvbhsrlpgdmjqwftvncz", () => {
            expect(day06.part2("bvwbjplbgvbhsrlpgdmjqwftvncz")).toEqual("23")
        })
        test("nppdvjthqldpwncqszvftbrmjlhg", () => {
            expect(day06.part2("nppdvjthqldpwncqszvftbrmjlhg")).toEqual("23")
        })
        test("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", () => {
            expect(day06.part2("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg")).toEqual(
                "29",
            )
        })
        test("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", () => {
            expect(day06.part2("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw")).toEqual(
                "26",
            )
        })
    })
})

const input = ``
