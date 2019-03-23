/**
 * @author 大漠穷秋
 * 创建项目
 */
const simpleGit = require("simple-git")("./");
const AngularTemplateURL = "https://gitee.com/mumu-osc/NiceFish.git";
const ReactTemplateURL = "https://gitee.com/mumu-osc/NiceFish-React.git";

function gitClone(dirName, framework) {
    let templateURL = AngularTemplateURL;
    if (framework == 'Angular') {
        templateURL = AngularTemplateURL;
    } else if (framework == 'React') {
        templateURL = ReactTemplateURL;
    } else {
        throw new Error("不存在指定的框架模板...");
    }
    console.log(`开始拉取模板项目，使用${framework}框架，项目路径：${templateURL}`);
    simpleGit.clone(templateURL, dirName);
}

module.exports = function (dirName, framework) {
    if (!dirName) {
        return;
    }
    gitClone(dirName, framework);
};