/**
 * 1. 获取data所有的key
 * 2. 每一个key都意味着一个新的对象
 *    2.1 key是这个对象的属性field的值
 *    2.2 这个key的值也是这个对象的值
 *    2.3 如果key的值中有children属性，则建立columns属性
 *        children属性中的值的处理同上
 */

// data是个Object 是columns数组中的一项
function buildColumns (key, value) {
  if (value.constructor === Object) {
    return keyToObject(key, value)
  } else {
    throw new Error(
      JSON.stringify({ msg: '返回值不是数组类型: ' + value.constructor })
    )
  }
}
// columns也是数组
function keyToObject (key, value) {
  if (!value.columns) {
    return { field: key, ...value }
  } else {
    for (let i = 0; i < value.columns.length; i++) {
      const element = value.columns[i]
      for (const elementKey in element) {
        value.columns[i] = buildColumns(elementKey, element[elementKey])
      }
    }
  }
  // return {field: key, ...value}
  return value
}

function buildGridHeader (data, isBuildColumns) {
  const result = []
  if (data.constructor === Array) {
    for (const iterator of data) {
      for (const key in iterator) {
        result.push(keyToObject(key, iterator[key], isBuildColumns))
      }
    }
    return result
  } else {
    throw new Error(
      JSON.stringify({ msg: '返回值不是数组类型: ' + JSON.stringify(data) })
    )
  }
}

const baseData = {
  data: [
    {
      code: {
        caption: '编码',
        style: {
          align: 'center'
        }
      },
      name: {
        caption: '名称',
        columns: [
          {
            cumulative: {
              caption: '累计应计未计',
              columns: [
                {
                  cumulativeQuantity: { caption: '数量' }
                },
                {
                  cummmmm: {
                    caption: '两盒'
                  }
                }
              ]
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

// buildGridHeader(baseData.data)

module.exports = buildGridHeader