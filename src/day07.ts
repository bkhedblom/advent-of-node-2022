interface Dir {
    name: string
    size: number
}

const generalSolver = (input: string) => {
    return ""
}

export const day07 = {
    part1: (input: string): string => {
        const cmdsWithOutput = input.split("$")
        const dirs = [] as Dir[]
        const dirStack = [] as Dir[]

        cmdsWithOutput.forEach(cmdWithOutput => {
            const [cmdWithArgs, ...output] = cmdWithOutput.split("\n")
            const [cmd, ...args] = cmdWithArgs.split(" ")
            switch (cmd) {
                case "cd":
                    const firstArg = args[0]
                    const dir = dirs.find(d => d.name === firstArg) ?? {
                        name: firstArg,
                        size: 0,
                    }
                    dirStack.push(dir)
                    break

                case "ls":
                    break
                default:
                    throw new Error(`Unkown command ${cmd}`)
            }
        })
        return ""
    },
    part2: (input: string): string => {
        return ""
    },
}
