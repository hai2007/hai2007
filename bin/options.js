module.exports = {

    // 可用命令
    "command": {
        create: {
            info: "创建常用项目脚手架",
            demo: "hai2007 create",
            config: ['force']
        },
        network: {
            info: "查看网络相关信息",
            demo: "hai2007 network",
            config: []
        },
        network: {
            info: "启动HTTP服务器",
            demo: "hai2007 server",
            config: ['port']
        }
    },

    // 参数配置
    "config": {
        force: {
            short: 'f',
            info: '强制执行',
            demo: '--force|-f'
        },
        version: {
            short: 'v',
            info: '打印版本号',
            demo: '--version|-v'
        },
        help: {
            short: 'h',
            info: '显示帮助学习',
            demo: '--help|-h <term>'
        },
        port: {
            short: 'p',
            info: '服务器端口号',
            demo: 'server --port|-p <number>'
        },
    },

    // 帮助信息
    "help": `
    Usage: hai2007 <command>
    
    where <command> is one of:
      create, network, server
    
    hai2007 --help|-h <命令>       打印具体的命令说明
    hai2007 --help|-h              打印所有可用命令
      `

};