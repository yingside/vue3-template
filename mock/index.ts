import Mock from "mockjs"; //mockjs 导入依赖模块
import util from "./util"; //自定义工具模块
import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/users/list",
    method: "get",
    response: () => {
      const json = util.getJsonFile("./userInfo.json");
      return Mock.mock(json);
    }
  }
] as MockMethod[];
