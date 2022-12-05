import { day01 } from "./day01"
import { day02 } from "./day02"
import { day03 } from "./day03"
import { day04 } from "./day04"
import { day05 } from "./day05"

export type PartSolver = (input: string) => string

interface Solver {
    part1: PartSolver
    part2: PartSolver
}

const solvers:Solver[] = [
    //all days need to be added, in order
    day01,
    day02,
    day03,
    day04,
    day05
]

export const getSolver = (day:number) => {
 if (day < 1 || day > solvers.length)  throw new Error(`No solver for day ${day}`)
 return solvers[day-1]
}