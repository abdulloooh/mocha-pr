const mongoose = require("mongoose")

const dbUrl = {
    testUrl: ()=>process.env.TESTDB_URL,
    development: "mongodb://localhost:27017/testing",
    get test(){
        return this.testUrl()
        // needed so it can execute testUrl fcn again & update TESTDB_URL variable
    }
}
   
module.exports = {
    init(){
        return mongoose.connect(
            dbUrl[process.env.STAGE || process.env.NODE_ENV || "development"],
            {useNewUrlParser:true, useUnifiedTopology:true}
        )
    },
    close(){ mongoose.disconnect()}
}
