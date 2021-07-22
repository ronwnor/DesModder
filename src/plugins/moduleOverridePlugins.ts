import pinExpressions from "plugins/pin-expressions/moduleOverrides";
import shiftEnterNewline from "plugins/shift-enter-newline/moduleOverrides";

export interface ModuleOverrides {
  [key: string]: (definition: any, dependencies: string[]) => Function;
}
export const pluginModuleOverrides = {
  ...pinExpressions,
  ...shiftEnterNewline,
} as ModuleOverrides;