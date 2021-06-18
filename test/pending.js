const {expect} = require("chai")
const sum = require("../src/sum")

describe("#sum", function(){
    context("with no arguments", function(){
        it("should return 0", function(){
            expect(sum()).to.equal(0)
        })
    })

    context("with 1 number argument", function(){
        it("should return the argument")
    })


    context("with number arguments", function(){
        it("should return sum")
    })

    context("with non-number arguments", function(){
        it("should throw error")
    })
})

/**
You can use .only() and .skip() multiple times to select a set of suites and tests to run. 
However, you must note the following:

Nested suites will still be executed
Hooks will still be executed if present
Tests will have precedence
 */



//https://blog.logrocket.com/a-quick-and-complete-guide-to-mocha-testing-d0e0ea09f09d/