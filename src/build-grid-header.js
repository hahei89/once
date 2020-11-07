/**
 * 1. 获取data所有的key
 * 2. 每一个key都意味着一个新的对象
 *    2.1 key是这个对象的属性field的值
 *    2.2 这个key的值也是这个对象的值
 *    2.3 如果key的值中有children属性，则建立columns属性
 *        children属性中的值的处理同上
 */
const result = []

// data是个Object 是columns数组中的一项
function buildColumns (key, value) {
  if (value.constructor === Object) {
    return keyToObject(key, value, true)
  } else {
    throw new Error(
      JSON.stringify({ msg: '返回值不是数组类型: ' + value.constructor })
    )
  }
}
// columns也是数组
function keyToObject (key, value, isBuildColumns) {
  if (!value.columns && !isBuildColumns) {
    result.push(Object.assign({}, { field: key }, value))
  } else if (!value.columns && isBuildColumns) {
    return { field: key, ...value }
  } else {
    for (let i = 0; i < value.columns.length; i++) {
      const element = value.columns[i];
      for (const key in element) {
        value.columns[i] = buildColumns(key, element[key])
      }
    }
    result.push(Object.assign({}, { field: key }, value))
  }
}

function buildGridHeader (data, isBuildColumns) {
  if (data.constructor === Array) {
    for (const iterator of data) {
      for (const key in iterator) {
        keyToObject(key, iterator[key], isBuildColumns)
      }
    }
  } else {
    throw new Error(
      JSON.stringify({ msg: '返回值不是数组类型: ' + data.constructor })
    )
  }
}

const baseData = {
  data: [
    {
      code: { caption: '编码' },
      name: {
        caption: '名称',
        columns: [
          {
            cumulative: {
              caption: '累计应计未计'

              // columns: { cumulativeQuantity: { caption: '数量' } }
            }
          },
          {
            newCome: {
              caption: '两个'
            }
          }
        ]
      }
    }
  ]
}

buildGridHeader(baseData.data)
console.log(JSON.stringify(result))
