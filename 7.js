//addListener：监听事件
//removeListener：移除事件
//listeners：返回所有数组成员是一个事件
var EventEmitter=require("events").EventEmitter
var emitter=new EventEmitter;
var resultfn=function(){
    console.log("resultfn")
}
emitter.addListener("fn",resultfn)
setInterval(()=>{
    emitter.emit("fn")
},20)
setTimeout(()=>{
    emitter.removeListener("fn",resultfn)
    console.log("gg")
},200)