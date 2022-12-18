export const sum = (a: number, b: number) => a + b

export const hasDuplicates = (chars: string[]): boolean =>
    !!chars.filter((c, index, arr) => arr.indexOf(c) !== index).length
