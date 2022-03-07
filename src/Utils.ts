import chalk from 'chalk'
import { promises as fs } from 'fs'

const log = console.log

const Utils = {
  importJSONABI: async (path: string) => {
    try {
      let jsonABI = await fs.readFile(path, { encoding: 'utf8', flag: 'r'})
      log(chalk.green('✅ JSON ABI file sucessefully imported'))
      return jsonABI
    } catch (error) {
      // @ts-ignore error Object is of type 'unknown'.ts(2571)
      log(chalk.red(`😫 Failed to load ABI file: ${error.message}`))
      process.exit(1)
    }
  },

  saveABItoFileSystem: async (content:  Array<string> | string, path: string) => {
    

    try {
      const file = await fs.writeFile(path, JSON.stringify(content, null, 2))
      log(chalk.greenBright(`✅ Parsed file successfully written to ${path}`)) 

    } catch (error) {
      // @ts-ignore error Object is of type 'unknown'.ts(2571)
      log(chalk.red(`😫 Failed to save formatted ABI, with error: ${error.message}`)) 
      process.exit(1)
    }
  }
}

export default Utils
