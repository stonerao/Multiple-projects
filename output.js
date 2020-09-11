const glob = require("glob");
// webpack 打包的文件
// 是否打包public下面所有项目
const OUTPUT_ALL = false;

// 指定打包目录
let entrys = ['tp1'];

function getEntryFile() {
    var entry = [];
    //读取src目录所有page入口
    glob.sync('./src/public/*').forEach(function (name) {
        const fileArr = name.split("/");
        const _n = fileArr[fileArr.length - 1];
        entry.push(_n);
    });
    return entry;
};

if (OUTPUT_ALL) {
    entrys = getEntryFile()
};

module.exports = entrys; 