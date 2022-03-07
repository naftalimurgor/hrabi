import { ethers } from 'ethers'
const { FormatTypes, Interface } = ethers.utils
import Utils from './Utils'
import chalk from 'chalk'

const log = console.log

const Parser = {
  parse: async function (path: string, outputPath: string) {
    try {
      const jsonAbi = await Utils.importJSONABI(path)
      const formatted = this._parseABI(jsonAbi)
      return await Utils.saveABItoFileSystem(formatted, outputPath)
    } catch (error) {
      // @ts-ignore : 
      log(chalk.red(`Failed to parse/import abi: ${error.message}. Ensure your provide a valid JSON ABI file`))            
    }
  },

  _parseABI: function (jsonABI: string) {
    const iface = new Interface(jsonABI).format(FormatTypes.full)
    return iface
  }
}

export default Parser
