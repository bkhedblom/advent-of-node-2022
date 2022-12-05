import { readFileSync } from "fs"
import { getSolver, PartSolver } from "./getSolver"

const runSolver = (solver:PartSolver, input:string) => {
    const result = solver(input)
    console.log(result)
}

const main = (args:string[]) => {
    const dayArg = args[0]
    const day = parseInt(dayArg, 10)
    if (isNaN(day)) throw Error(`Not a number: ${dayArg}`)
    const solver = getSolver(day)
    const inputFile = `src/day${day.toString().padStart(2, "0")}.input` //quite fragile, but will do for now...
    const input = readFileSync(inputFile).toString()
    
    const partArg = args.length > 1 ? args[1] : false
    if(!partArg || partArg.includes("1")){
        console.log(`Solving day ${day} part 1:`)
        runSolver(solver.part1, input)
    }
    if(!partArg || partArg.includes("2")){
        console.log(`Solving day ${day} part 2:`)
        runSolver(solver.part2, input)
    }    
}

main(process.argv.slice(2))