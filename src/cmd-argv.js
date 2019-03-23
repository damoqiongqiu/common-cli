/**
 * @author 大漠穷秋
 * 主入口，接受命令行参数
 */
const commander = require("commander");
const newHandler = require("./cmd-handlers/handler-new");
const buildHandler = require("./cmd-handlers/handler-build");
const serveHandler = require("./cmd-handlers/handler-serve");

commander
    .version("Common/Fish CLI: 1.0.1")
    .version("Common/Fish CLI: 1.0.1", '-v, --version')

commander
    .command("new <dir>")
    .alias("n")
    .description("创建项目")
    .option("-a,--Angular", "使用Angular框架")
    .option("-r,--React", "使用React框架")
    .action(function (dir, options) {
        let framework = "Angular";
        if (options.React) {
            framework = "React";
        }
        newHandler(dir, framework);
    });

commander
    .command("build")
    .alias("b")
    .description("构建项目")
    .action(function (cmd, options) {
        buildHandler();
    });

commander
    .command("serve")
    .alias("s")
    .description("启动项目")
    .action(function (cmd, options) {
        serveHandler();
    });

commander.parse(process.argv);