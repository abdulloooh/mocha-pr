const User = require("./models/user")

const {init} = require("./connect")

!process.env.STAGE && 
    init()
        .then(()=>console.log("connected to mongodb successfully..."))
        .catch(err=>{throw err})

async function addUser(user){
    const res = await new User(user).save()
    return res
}


async function getUsers(){
    const res = await User.find()
    console.log(res)
}


module.exports ={
    addUser,getUsers
}