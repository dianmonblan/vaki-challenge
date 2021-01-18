// CUSTOM INTERFACES
import { ConfigurationInterface } from "./interfaces";

declare function require(moduleName: string): any;
const { version, homepage } = require("../../../../package.json");

export const CONFIG: ConfigurationInterface = {
  version: version,
  homepage: homepage
};