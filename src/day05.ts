export const day05 = {
    part1: (input: string): string => {
        const inputblocks = input.split("\n\n")
        const startingStacks = inputblocks[0].split("\n")
        const maxStackPos = startingStacks[startingStacks.length - 1].length - 1
        const stacks: string[][] = []
        for (let pos = 1; pos < maxStackPos; pos += 4) {
            const stack: string[] = []
            startingStacks.slice(0, -1).forEach(line => {
                const val = line[pos]?.trim()
                if (val) stack.push(val)
            })
            stack.reverse()
            stacks.push(stack)
        }

        const instructions = inputblocks[1].split("\n")
        const instructionRegexp = /move (\d+) from (\d+) to (\d+)/
        instructions
            .filter(line => !!line)
            .forEach(line => {
                const match = line.match(instructionRegexp)
                if (!match) throw Error(`Couldn't parse instruction: ${line}`)
                const [count, from, to] = match.slice(1, 4).map(s => +s)
                for (let i = 0; i < count; i++) {
                    const crate = stacks[from - 1].pop()
                    if (!crate) throw Error("Tried to move from empty stack")
                    stacks[to - 1].push(crate)
                }
            })
        return stacks.flatMap(v => v[v.length - 1]).join("")
    },
    part2: (input: string): string => {
        return ""
    },
}
