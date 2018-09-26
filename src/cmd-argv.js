/**
 * 命令行工具会根据用户输入进行操作，所以接受并解析命令行指令和参数就是主入口。
 * 解析出用户需要执行的指令和参数之后，调用对应的模块进行操作。
 */
const commander = require("commander");
const newHandler = require("./handler-new");
const buildHandler = require("./handler-build");
const serveHandler = require("./handler-serve");

commander
    .version("Common CLI: 1.0.0")
    .option("-n, --new <name>", "new project")
    .option("-b, --build", "build project")
    .option("-s, --serve", "run project")
    .parse(process.argv);

if (commander.new) newHandler(commander.new);
if (commander.build) buildHandler(commander.build);
if (commander.serve) serveHandler(commander.serve);

if (process.argv.length < 3) {
    commander.help();
}
