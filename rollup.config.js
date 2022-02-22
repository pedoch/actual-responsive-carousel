import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
// import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      // postcss({
      //   plugins: [],
      //   minimize: true,
      // }),
      commonjs({
        ignoreGlobal: true,
        include: /\/node_modules\//,
        namedExports: {
          react: Object.keys(require("react")),
          "react-is": Object.keys(require("react-is")),
        },
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve(),
      terser(),
    ],
  },
];
