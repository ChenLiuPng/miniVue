import serve from "rollup-plugin-serve";
import babel from "rollup-plugin-babel";

export default {
  // 用于打包的配置
  input: "./src/index.js",
  output: {
    file: "dist/vue.js",
    name: "Vue",
    format: "umd",
    sourcemap: true,
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    serve({
      open: true,
      openPage: "/public/index.html",
      port: 3000,
      contentBase: "",
    }),
  ],
};
