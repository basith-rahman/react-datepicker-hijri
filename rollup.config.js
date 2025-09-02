import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json" with { type: "json" };

const config = {
  output: {
    format: process.env.BABEL_ENV
  },
  plugins: [
    nodeResolve({
      preferBuiltins: false,
      extensions: [".js", ".jsx"]
    }),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled"
    }),
    commonjs()
  ],
  external: Object.keys(pkg.dependencies).concat(
    Object.keys(pkg.peerDependencies)
  )
};

export default config;
