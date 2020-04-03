//标准输出 WriteableStream
//SIGINT 获取当前进程接收到的信号 获取按键信息到应用程序中
process.on("SININT",()=>{
    console.log("收到sinint的信号")
})
console.log("按一下aaaa")
setTimeout((dunction) => {
    console.log("end")
}, 3000);