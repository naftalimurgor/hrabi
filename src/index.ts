#! /usr/bin/env node

import { Command } from 'commander'
import Parser from './Parser'

const program = new Command()
program
  .name('hrabi')
  .description('hrabi- JSON ABI to Human Readable ABI parser')
  .version('1.1.1')

program.command('parse')
  .argument('--abi')
  .argument('--output')
  .action((abi, output) => {
    Parser.parse(abi, output)
  })

program.parse()