const axios = require('axios')

// TODO: 去除URL使用命令自带的
const url = 'http://rap2api.taobao.org/app/mock/257377/mctech/grid-json'

// 获取数据
async function getSourceJSon (url) {
  const result = await axios.get(url)
  if (result.status === 200 && result.data) {
    if (result.data.constructor !== Object) {
      throw new Error (JSON.stringify({
        status: 500,
        msg: '返回值不是对象类型: ' + result.data.constructor
      }))
    }
    return { data: result.data, status: 200 }
  }
  throw new Error(JSON.stringify({
    status: 500,
    msg: `status: ${result.status}, msg: ${result.statusText}`
  }))
}

module.exports = getSourceJSon
