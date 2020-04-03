/**
 * 捕获异常
 * uncaughtException
 */
process.on("uncaughtException",()=>{
    console.log("异常")
})
var c="1"
c.c() //发出异常
console.log(1)