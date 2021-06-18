const crypto = require("crypto")

module.exports = (string) => new Promise((resolve,reject)=>{
    try{
        const hash = crypto.createHash("md5").update(string).digest("hex")
        resolve(hash)
    }
    catch(err){
        reject(err)
    }
})
