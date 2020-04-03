/*
进程 progress

node的特点
单线程
非阻塞i/o
事件驱动

node的全局变量
process SeTimeout setInterval
process 全局变量
procress.version 输出node版本
procress.versions 输出nodejs环境相关依赖的版本
procrss.arch 获取当前电脑类型
procress.platform 系统类型
process.argv 获取命令行参数
process.env 获取当前系统环境参数
process.pid 获取当前进程id，每次创建新的进程，进程id都会发生变化
process.execPath() 获取node安装目录
process.cwd() 获取当前命令执行路径
process.nextTick()  相当于settimout  性能比settimout强
function fn(){
    consloe.log(1)
}
process.studin 标准输入
process.studout 标准输出
process.stderr  标准错误
process.exit()  退出当前进程
process.kill()  发送任意信号



模块分类
内置模块(核心模块) process settime
外置模块 require
自定义模块 (第三方包)npm require
*/
