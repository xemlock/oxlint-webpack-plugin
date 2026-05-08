import { Compiler, WebpackPluginInstance } from "webpack";

export interface Options {
  format?: "default" | "stylish";
  childProcessMaxFiles?: number;
}

export class OxLintWebpackPlugin implements WebpackPluginInstance {
  constructor(options?: Options);
  apply: (compiler: Compiler) => void;
}
