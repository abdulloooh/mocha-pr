const mongoose = require("mongoose")

module.exports.connect = () => {
    return mongoose.connect(
        "mongodb://localhost:27017/testing",
        {useNewUrlParser:true, useUnifiedTopology:true}
    )
}

module.exports.close = () => mongoose.disconnect()