import { sum } from "./utils"

const [loss, draw, win] = [0, 3, 6]

type MoveName = "rock" | "paper" | "scissors"

interface Move {
    name: MoveName
    score: number
    vs: {
        rock: number
        paper: number
        scissors: number
    }
}

const rock: Move = {
    name: "rock",
    score: 1,
    vs: {
        rock: draw,
        paper: loss,
        scissors: win,
    },
}

const paper: Move = {
    name: "paper",
    score: 2,
    vs: {
        rock: win,
        paper: draw,
        scissors: loss,
    },
}

const scissors: Move = {
    name: "scissors",
    score: 3,
    vs: {
        rock: loss,
        paper: win,
        scissors: draw,
    },
}

const moves = [rock, paper, scissors]

const asOutcome = (str: string) => {
    switch (str) {
        case "X":
            return loss

        case "Y":
            return draw

        case "Z":
            return win

        default:
            throw Error(`Unkown outcome: ${str}`)
    }
}

const asMove = (movestring: string): Move => {
    switch (movestring) {
        case "A":
        case "X":
            return rock

        case "B":
        case "Y":
            return paper

        case "C":
        case "Z":
            return scissors

        default:
            throw Error(`unkown move: ${movestring}`)
    }
}

const generalSolver = (
    input: string,
    roundsolver: (round: string) => number,
): string =>
    input
        .split("\n")
        .filter(x => !!x)
        .map(roundsolver)
        .reduce(sum)
        .toString()

export const day02 = {
    part1: (input: string): string =>
        generalSolver(input, round => {
            const [opMove, myMove] = round.split(" ").map(asMove)
            return myMove.score + myMove.vs[opMove.name]
        }),
    part2: (input: string): string =>
        generalSolver(input, round => {
            const [opStr, outcomeStr] = round.split(" ")
            const opMove = asMove(opStr)
            const outcome = asOutcome(outcomeStr)
            const myMove = moves.filter(m => m.vs[opMove.name] === outcome)[0]
            return myMove.score + myMove.vs[opMove.name]
        }),
}
