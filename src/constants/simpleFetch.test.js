const simpleFetch = require("./simpleFetch")
// @ponicode
describe("simpleFetch.default", () => {
    test("0", () => {
        let callFunction = () => {
            simpleFetch.default("https://")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            simpleFetch.default("www.google.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            simpleFetch.default("ponicode.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            simpleFetch.default("https://croplands.org/app/a/reset?token=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            simpleFetch.default("https://api.telegram.org/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            simpleFetch.default(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
