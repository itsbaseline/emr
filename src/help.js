import chalk from 'chalk';

const menus = {
    main: `
${chalk.greenBright('emr-cli [command] <options>')}
  ${chalk.blueBright('run')} ................ run projects
  ${chalk.redBright('run -p')} ............. you can switch file path
  ${chalk.blueBright('version')} ............ show package version
  ${chalk.blueBright('help')} ............... show help menu for a command
`,
}

export async function help(args) {
    const subCmd = args._[0] === 'help'
        ? args._[1]
        : args._[0]
    console.log(menus[subCmd] || menus.main)
}