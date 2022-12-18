import { isMainThread } from "worker_threads"

class Range {
    readonly start: number
    readonly end: number
    constructor(dashSeparated: string) {
        const [start, end] = dashSeparated.split("-")
        this.start = +start
        this.end = +end
    }

    contains(other: Range) {
        return this.start <= other.start && this.end >= other.end
    }

    overlaps(other: Range) {
        if (this.end < other.start || this.start > other.end) return false
        return true
    }
}

const generalSolver = (
    input: string,
    checkOverlap: (first: Range, second: Range) => boolean,
): string => {
    let overlaps = 0
    input.split("\n").forEach(pairs => {
        const [first, second] = pairs.split(",").map(r => new Range(r))
        if (checkOverlap(first, second)) overlaps += 1
    })
    return overlaps.toString()
}

export const day04 = {
    part1: (input: string): string =>
        generalSolver(
            input,
            (first, second) => first.contains(second) || second.contains(first),
        ),
    part2: (input: string): string =>
        generalSolver(input, (first, second) => first.overlaps(second)),
}
