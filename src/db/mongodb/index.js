const User = require("./models/user")

const {connect} = require("./connect")

connect().then(()=>console.log("connected to database testing..."))

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