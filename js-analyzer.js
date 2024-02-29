module.exports = {
  // 根目录
  root: "/Users/heyongjian/Desktop/code/my-app",
  // 不需要分析的目录
  ignore: ["**/node_modules/**", "**/dist/**"],
  // 解析没有扩展名的文件时优先查找顺序
  extensions: [".js", ".ts", ".tsx", ".vue", ".json", "jsx"],
  // 项目的别名映射路径
  alias: {
    "@/": "/",
    "~~/": "/",
    "@/": "/src/",
    "~/": "/src/",
  },
  // 启动的服务器和端口相关
  server: {
    port: 8088,
    host: "localhost",
    openBrowser: true, // 启动后自动在浏览器打开
  },
};