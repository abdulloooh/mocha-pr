const {expect} = require("chai")
const md5 = require("../src/md5")


describe("#hashing with md5", function(){
    context("with string arguments", function(){
        it("should return hash values", function(done){
            md5("abd", function(err,result){
                if(err) return done(err)

                expect(result).to.be.a("string")
                    .that.matches(/^[a-f0-9]{32}$/)
                    .and.equals("4911e516e5aa21d327512e0c8b197616")

                done()
            })
        })
    })

    context("with non string arguments", function(){
        it("should throw type error", function(done){
            md5(123, function(err,result){
                if(err){
                    expect(function(){throw err})
                        .to.throw(TypeError)
                    return done()
                }
                
                done()
            })
        })
    })


    context("with no string & no call back", function(){
        it("should return nothing", function(){
            expect(typeof md5("abd")).to.equals("undefined")
        })
    })


    context("withno non-string & no call back", function(){
        it("should throw error", function(){
            expect(function(){md5(123)}).to.throw(TypeError)
        })
    })
})