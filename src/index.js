#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
// 获取初始json数据
const getSourceJSon = require('./get-source.js')
// 构造grid头
const buildGridHeader = require('./build-grid-header.js')

program
  .version('0.0.1')
  .helpOption('-h, --help')
  .option('-u, --url <url>', 'json数据来源的url', '数据来源url')
  .option('-g, --grid [grid.json]', 'grid标题行')
  .option('-e, --excel [excel.json]', 'excel标题行')
  .parse(process.argv)

if (program.url) {
  new Promise(function (res, rej) {
    const data = getSourceJSon(program.url)
    res(data)
  })
    .then(
      res => {
        if (res.status === 200) {
          const data = res.data.data
          console.log(JSON.stringify(buildGridHeader(data), null, '  '))
          const commonStyle = res.style
        }
      }
    )
    .catch(error => {
      console.log(error)
    })
}
