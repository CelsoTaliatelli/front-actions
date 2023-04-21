/* eslint-disable prettier/prettier */
import { execSync } from "child_process";

console.log("[DEPLOY_PREVIEW]: START");
const command = "npm run deploy:staging";
const output = execSync(command, {encoding:"utf-8"}).toString();
const outputLines = output.split("\n");
const DEPLOY_URL = outputLines[outputLines.length - 1];
console.log("[DEPLOY_PREVIEW]: END");
console.log(`Você pode ver o deploy preview aqui: ${DEPLOY_URL}`);


//console.log("[GITHUB_COMMENT]:");