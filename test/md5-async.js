const {expect} = require("chai")
const md5Promise = require("../src/md5-promise")

setTimeout(() => {
    console.log("tests delayed for 5s")    
    run()
}, 5000);

describe("#md5AsyncAwait", function(){
    context("with string arguments", function(){
        it("should return hash values", async function(){
            const hash = await md5Promise("abd")
            expect(hash).to.be.a("string")
                .that.matches(/^[a-f0-9]{32}$/)
                .and.equals("4911e516e5aa21d327512e0c8b197616")
        })
    })

    context("with non string arguments", function(){
        it("should throw type error", async function(){
            try{
                const hash = await md5Promise("abd")
            }
            catch(err){
                expect(function(){throw err})
                    .to.throw(TypeError)
            }
        })
    })
})

// npm test -- -f md5AsyncAwait
/**
 * This command uses -— to pipe the command options and arguments to the underlying mocha CLI binary. 
 * The -f flag instructs Mocha.js to run only tests that contain the given string, 
 * which in this case is promiseMd5.
 */

// npm test -- --delay
// npm test -- --delay --f "Promise"
/**
 * Root-level hooks apply to all test files regardless of where they are defined. 
 * This is because Mocha implicitly creates a describe() block, called the root suite.
 * 
 * Same thing we have root level hooks in any test file, it applies to all files
 */