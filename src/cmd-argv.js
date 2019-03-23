/**
 * @author 大漠穷秋
 * 主入口，接受命令行参数
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
