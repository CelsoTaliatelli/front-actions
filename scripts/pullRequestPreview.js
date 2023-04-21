/* eslint-disable prettier/prettier */
import { execSync } from "child_process";

console.log("[DEPLOY_PREVIEW]: START");
const command = "npm run deploy:staging";
const output = execSync(command).toString();
console.log(output);
console.log("[DEPLOY_PREVIEW]: END");


//console.log("[GITHUB_COMMENT]:");