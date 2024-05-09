import { formatLog } from "./format.js";

export default class Logger {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  log(message) {
    console.log(formatLog(this.level, message));
  }
}

export let logger = new Logger("Default", "INFO");

export function setLogger(newLogger) {
  logger = newLogger;
}
