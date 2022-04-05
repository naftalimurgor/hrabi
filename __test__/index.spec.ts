import chai, { expect } from 'chai'
const fs = require('fs/promises')

chai.use(require('chai-fs'))

import Parser from '../src/Parser'


describe('#Parser', function () {
  it('parse JSON ABI with extra Metadata to Human Readable ABI', async () => {
    this.timeout(1000) 

    const jsonABIPath = '__test__/YourContract.json'
    let outputPath = '__test__/YourContract.js'
    const output = await Parser.parse(jsonABIPath, outputPath)
    expect(outputPath).to.be.a.file().with.content(output)
  })
})