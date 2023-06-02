import { Plugin } from "plugins";

const shiftEnterNewline: Plugin = {
  id: "shift-enter-newline",
  key: "shiftEnterNewline",
  // Still need to declare empty onEnable and onDisable to get the right UI
  onEnable: () => undefined,
  onDisable: () => {},
  enabledByDefault: true,
  /* Has module overrides */
} as const;
export default shiftEnterNewline;
