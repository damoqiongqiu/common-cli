const shell = require("shelljs");

module.exports = function () {
    console.log("starting...");
    shell.exec("npm run start");
};