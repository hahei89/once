#!/usr/bin/env node

const program = require('commander')


// 获取初始json数据
const getSourceJSon = require('./get-source.js')
program
  .version('0.0.1')
  .helpOption('-h, --help')
  .option('-u, --url <url>', 'json数据来源的url', '数据来源url')

program.parse(process.argv)

if (program.url) {
  new Promise(function (res, rej) {
    try {
      const data = getSourceJSon(program.url)
      res(data)
    } catch (error){
      console.log(error)
      rej(error)
    }
  }).then((res)=>{
    if(res.status === 200) {
      const data = res.data
      const commonStyle = res.style
    }
  }, (error) =>{
    console.log(error)
    // throw new Error(rej)
  }).catch(rej => {
    console.log('sss')
  })
}
