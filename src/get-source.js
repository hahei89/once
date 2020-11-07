const axios = require('axios')

// TODO: 去除URL使用命令自带的
const url = 'http://rap2api.taobao.org/app/mock/257377/mctech/grid-json'

// 获取数据
async function getSourceJSon(url) {
  try {
    const result = await axios.get(url)
    if(result.status === 200 && result.data){
      if(result.data.constructor !== Object){
        throw new Error('返回值不是对象类型: ', result.data.constructor) 
      }
      return result.data
    }
    throw new Error(result.status + ' ' + result.statusText)
  } catch(error){
    throw new Error(error)
  }
}

export getSourceJSon
