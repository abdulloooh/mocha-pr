const {connect, close: closeConnection} = require("../../src/db/mongodb/connect")
const User = require("../../src/db/mongodb/models/user")
const {addUser,getUsers} = require("../../src/db/mongodb/index")
const { expect } = require("chai")



// root level suite
connect()
    .then(()=>{
        console.log("connected to database testing...")

        User.deleteMany(function(err) { 
            if(err) return done(err)

            console.log('collection removed') 
            console.log("Tests starting...")
            
            run()
        });
    })

describe.only("#mongobdTest", function(){

    describe("#AddUser", function(){
        context("#Add valid user with name", function(){
            it("should return with created user object", async function(){
                const newUser = {name:"Abdullah", description:"cool guy"}
                const result = await addUser(newUser)

                expect(result).to.have.property("_id")
                expect(result).to.have.property("name", newUser.name.toLowerCase())
                expect(result).to.have.property("description", newUser.description)
                
            })


            it("should return with error cos of duplicate", async function(){
                const newUser = {name:"Abdullah", description:"cool guy"}
                 try{
                    await addUser(newUser)
                }
                catch(err){
                    expect(function(){throw err})
                        .to.throw(`E11000 duplicate key error collection: testing.users index: name_1 dup key: { name: "abdullah" }`)
                }
                
            })
        })

         context("#Add user with no name", function(){
            it("should throw error", async function(){
                const newUser = {description:"cool guy"}
                try{
                    await addUser(newUser)
                }
                catch(err){
                    expect(function(){throw err}).to.throw("Path `name` is required")
                }
            })
        })

         context("#Add user with bad name", function(){
            it("should throw error", async function(){
                const newUser = { name:[1234], description:"cool guy"}
                try{
                    await addUser(newUser)
                }
                catch(err){
                    expect(function(){throw err})
                        .to.throw(`Cast to string failed for value "[ 1234 ]" (type Array) at path "name"`)
                }
            })
        })
    })

    describe("#Get Users",function(){
        it("should return empty user")
        
        it("should return 1 user")

        it("should return list of users")
    })


     after(function(done){
        User.deleteMany(function(err) { 
            if(err) return done(err)

            console.log('collection removed') 
            console.log("Tests ended")

            closeConnection().then(()=>console.log("connection cloosed"))

            done()
        });
    })
})

after(function(done){
    closeConnection().then(()=>console.log("connection cloosed"))
    done()
});