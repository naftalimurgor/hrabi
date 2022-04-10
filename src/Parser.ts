import { ethers } from 'ethers'
const { FormatTypes, Interface } = ethers.utils
import Utils from './Utils'
import chalk from 'chalk'

const log = console.log

const getABIproperty = (abiObj: string): string => {
  const _abiObj = JSON.parse(abiObj)
  if(_abiObj.hasOwnProperty('abi')) return JSON.stringify(_abiObj.abi)
  else return abiObj
}

const Parser = {
  parse: async function (path: string, outputPath: string) {
    try {
      const jsonAbi = await Utils.importJSONABI(path)
      const abiProp = getABIproperty(jsonAbi)
      const formatted = this._parseABI(abiProp)
      await Utils.saveABItoFileSystem(formatted, outputPath)
      return JSON.stringify(formatted, null, 2)
    } catch (error) {
      // @ts-ignore : 
      log(chalk.red(`Failed to parse/import abi: ${error.message}. Ensure you provide a valid JSON ABI file`))            
    }
  },

  _parseABI: function (jsonABI: string): string | Array<string> {
    const iface = new Interface(jsonABI).format(FormatTypes.full)
    return iface
  }
}

export default Parser
