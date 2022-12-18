import { sum } from "./utils"

const CHARCODE_a = 97
const OFFSET_a_to_1 = CHARCODE_a - 1
const CHARCODE_A = 65
const OFFSET_A_to_27 = CHARCODE_A - 27

const itemPriority = (c: string | undefined) => {
    if (!c) throw Error("This won't work!")
    const charcode = c.charCodeAt(0)
    return charcode >= CHARCODE_a
        ? charcode - OFFSET_a_to_1
        : charcode - OFFSET_A_to_27
}

export const day03 = {
    part1: (input: string): string =>
        input
            .split("\n")
            .flatMap(rucksack => {
                const items = rucksack.split("")
                const right = new Set(items.splice(items.length / 2))
                const inBoth = new Set(items.filter(item => right.has(item)))
                const left = new Set(items)
                right.forEach(item => {
                    if (left.has(item) && !inBoth.has(item)) inBoth.add(item)
                })
                return [...inBoth]
            })
            .map(itemPriority)
            .reduce(sum)
            .toString(),
    part2: (input: string): string => {
        const rucksacks = input.split("\n")
        let priority = 0
        while (rucksacks.length) {
            const group = rucksacks.splice(0, 3)
            const first = new Set(group[0].split(""))
            const second = new Set(group[1].split(""))
            const badge = group[2]
                .split("")
                .filter(c => first.has(c))
                .find(c => second.has(c))
            priority += itemPriority(badge)
        }
        return priority.toString()
    },
}
