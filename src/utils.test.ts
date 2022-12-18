import { it, describe, expect } from "@jest/globals"
import { hasDuplicates } from "./utils"

describe("utils", () => {
    describe("hasDuplicates", () => {
        it("finds duplicates in [a,a]", () => {
            expect(hasDuplicates(["a", "a"])).toBe(true)
        })
        it("finds no duplicates in [a,b]", () => {
            expect(hasDuplicates(["a", "b"])).toBe(false)
        })
    })
})
