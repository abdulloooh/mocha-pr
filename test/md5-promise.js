const {expect} = require("chai")
const md5Promise = require("../src/md5-promise")


describe("#md5Promise", function(){
    context("with string arguments", function(){
        it("should return hash values", function(){
            md5Promise("abd")
                .then(result=>{
                    expect(result).to.be.a("string")
                        .that.matches(/^[a-f0-9]{32}$/)
                        .and.equals("4911e516e5aa21d327512e0c8b197616")
                })
        })
    })

    context("with non string arguments", function(){
        it("should throw type error", function(){
             md5Promise("abd")
                .catch(err=>{
                     expect(function(){throw err})
                        .to.throw(TypeError)
                })
        })
    })
})

// npm test -- -f md5Promise
/**
 * This command uses -— to pipe the command options and arguments to the underlying mocha CLI binary. 
 * The -f flag instructs Mocha.js to run only tests that contain the given string, 
 * which in this case is promiseMd5.
 */