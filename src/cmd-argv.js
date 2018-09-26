/**
 * 命令行工具会根据用户输入进行操作，所以接受并解析命令行指令和参数就是主入口。
 * 解析出用户需要执行的指令和参数之后，调用对应的模块进行操作。
 */
const commandLineArgs = require("command-line-args");
const commandLineUsage = require("command-line-usage");
const newHandler = require("./handler-new");
const versionHandler = require("./handler-version");

const optionDefinitions = [
    {
        name: "help",
        alias: "h",
        type: Boolean,
        description: "帮助文档"
    },
    {
        name: "new",
        alias: "n",
        type: String,
        multiple: false,
        description: "创建项目模板"
    },
    {
        name: "build",
        alias: "b",
        type: Boolean,
        multiple: false,
        description: "构建项目"
    },
    {
        name: "version",
        alias: "v",
        type: Boolean,
        multiple: false,
        description: "显示版本号"
    }
];

const options = commandLineArgs(optionDefinitions);
console.log(options);

/**
 * 显示帮助
 */
if (options.help || Object.keys(options).length == 0) {
    const usage = commandLineUsage([
        {
            header: "Common CLI",
            content: "我自己的CLI脚手架。"
        },
        {
            header: "Options",
            optionList: optionDefinitions
        }
    ]);
    console.log(usage);
    return;
}

if (options.new) {
    newHandler(options.new);
}
if (options.version) {
    versionHandler();
}
