import { sum } from "./utils"

export const day01 = {
    part1: (input: string): string => Math.max(...getElves(input)).toString(),
    part2: (input: string): string => {
        const elves = getElves(input)
        elves.sort((a, b) => a - b)
        return elves.slice(-3).reduce(sum).toString()
    },
}
function getElves(input: string) {
    return input.split("\n\n").map(elfString =>
        elfString
            .split("\n")
            .map(s => +s)
            .reduce(sum),
    )
}
