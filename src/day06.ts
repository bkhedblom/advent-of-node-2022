import { hasDuplicates } from "./utils"

const generalSolver = (input: string, markerLength: number) => {
    const chars = input.split("")
    const last4 = chars.splice(0, markerLength)
    while (chars.length && hasDuplicates(last4)) {
        last4.push(chars.shift()!)
        last4.shift()
    }
    return (input.length - chars.length).toString()
}

export const day06 = {
    part1: (input: string): string => generalSolver(input, 4),
    part2: (input: string): string => generalSolver(input, 14),
}
