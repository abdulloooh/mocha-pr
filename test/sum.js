const {expect} = require("chai")
const sum = require("../src/sum")

describe("#sum", function(){
    context("with no arguments", function(){
        it("should return 0", function(){
            expect(sum()).to.equal(0)
        })
    })

    context("with 1 number argument", function(){
        it("should return the argument", function(){
            expect(sum(5)).to.equal(5)
        })
    })


    context("with number arguments", function(){
        it("should return sum", function(){
            expect(sum(1,2,3,4,5)).to.equal(15)
        })
    })

    context("with non-number arguments", function(){
        it("should throw error", function(){
            expect(function(){
                sum(1,2,3,4,"ade")
            }).to.throw(TypeError,"sum() expects only number")
        })
    })
})