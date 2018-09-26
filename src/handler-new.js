const simpleGit = require("simple-git")("./");
//TODO:移动到配置文件里面去
const repoURL = "https://gitee.com/mumu-osc/react_webpack_starter.git";

//从仓库克隆一个模板项目
function gitClone(dirName) {
    simpleGit.clone(repoURL, dirName, "-b", "12-mobx");
}

module.exports = function(dirName) {
    console.log("开始创建项目模板>" + dirName);
    if (!dirName) {
        return;
    }
    // TODO:对项目名称进行校验，不符合规则直接报错退出
    gitClone(dirName);
};
