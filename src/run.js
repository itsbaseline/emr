const yaml = require('js-yaml');
const fs = require('fs');
import openTerminal from 'open-terminal';

export async function run(args) {
    try {
        const currentPath = process.cwd();
        const doc = yaml.safeLoad(fs.readFileSync(currentPath + '/emr.yaml', 'utf8'));
        let runScripts = "";
        Object.keys(doc.projects).map((i, index) => {
            if (index === Object.keys(doc.projects).length - 1) {
                runScripts = runScripts + `\'${doc.projects[i].run}\' `
            } else {
                runScripts = runScripts + `\'${doc.projects[i].run}\' .. `
            }
        })
        openTerminal(`cd ${currentPath} && stmux -w always -e ERROR -m beep,system -- [ [ ${runScripts} ] ]`, { cwd: "" });
    } catch (e) {
        console.log(e)
    }
}