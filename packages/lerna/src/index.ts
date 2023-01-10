/* eslint-disable @typescript-eslint/no-var-requires */
"use strict";

import { lernaCLI } from "@lerna/core";

const publishCmd = require("@lerna/publish/command");
const versionCmd = require("@lerna/version/command");

import * as addCmd from "@lerna/commands/add/command";
import * as bootstrapCmd from "@lerna/commands/bootstrap/command";
import * as changedCmd from "@lerna/commands/changed/command";
import * as cleanCmd from "@lerna/commands/clean/command";
import * as createCmd from "@lerna/commands/create/command";
import * as diffCmd from "@lerna/commands/diff/command";
import * as execCmd from "@lerna/commands/exec/command";
import * as importCmd from "@lerna/commands/import/command";
import * as infoCmd from "@lerna/commands/info/command";
import * as initCmd from "@lerna/commands/init/command";
import * as linkCmd from "@lerna/commands/link/command";
import * as listCmd from "@lerna/commands/list/command";
import * as runCmd from "@lerna/commands/run/command";
import * as addCachingCmd from "./commands/add-caching/command";
import * as repairCmd from "./commands/repair/command";
import * as watchCmd from "./commands/watch/command";

const pkg = require("../package.json");

module.exports = function main(argv: NodeJS.Process["argv"]) {
  const context = {
    lernaVersion: pkg.version,
  };

  return lernaCLI()
    .command(addCmd)
    .command(addCachingCmd)
    .command(bootstrapCmd)
    .command(changedCmd)
    .command(cleanCmd)
    .command(createCmd)
    .command(diffCmd)
    .command(execCmd)
    .command(importCmd)
    .command(infoCmd)
    .command(initCmd)
    .command(linkCmd)
    .command(listCmd)
    .command(publishCmd)
    .command(repairCmd)
    .command(runCmd)
    .command(watchCmd)
    .command(versionCmd)
    .parse(argv, context);
};
