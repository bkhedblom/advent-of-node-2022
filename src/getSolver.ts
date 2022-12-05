
export type PartSolver = (input: string) => string

interface Solver {
    part1: PartSolver
    part2: PartSolver
}

const solvers:Solver[] = [
    //all days need to be added, in order
]

export const getSolver = (day:number) => {
 if (day < 1 || day > solvers.length)  throw new Error(`No solver for day ${day}`)
 return solvers[day-1]
}