/**
 * 命令行工具会根据用户输入进行操作，所以接受并解析命令行指令和参数就是主入口。
 * 解析出用户需要执行的指令和参数之后，调用对应的模块进行操作。
 */
const commander = require("commander");
const newHandler = require("./handler-new");
const versionHandler = require("./handler-version");

commander
    .version("Common CLI: 1.0.0")
    .option("-n, --new <name>", "new project")
    .option("-b, --build", "build project")
    .parse(process.argv);

if (commander.new) newHandler(commander.new);
if (commander.build) versionHandler(commander.build);
if (commander.version) commander.version();

if (process.argv.length < 3) {
    commander.help();
}
