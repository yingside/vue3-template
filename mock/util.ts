import fs from "fs"; //引入文件系统模块
import path from "path"; //引入path模块

export default {
  //读取json文件
  getJsonFile: function (filePath: string) {
    //读取指定json文件
    const json = fs.readFileSync(
      path.resolve(__dirname, filePath),
      "utf-8"
    );
    //解析并返回
    return JSON.parse(json);
  }
};
