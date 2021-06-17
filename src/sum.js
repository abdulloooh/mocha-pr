module.exports=function(){
    const args = Object.values(arguments)
    console.log(args)

    if(!args.every(Number.isFinite)) throw new TypeError("sum() expects only number")

    return args.reduce((sum,n)=>sum+n, 0)
}