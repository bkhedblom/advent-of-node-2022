import { describe, test, expect } from "@jest/globals"
import { day07 } from "./day07"

describe("Day 07", () => {
    test("part 1", () => {
        expect(day07.part1(input)).toEqual("95437")
    })
    test("part 2", () => {
        expect(day07.part2(input)).toEqual("")
    })
})

const input = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`
