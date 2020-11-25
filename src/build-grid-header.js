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
      JSON.stringify({ msg: '原数据不是数组类型: ' + value.constructor })
    )
  }
}
// columns也是数组
function keyToObject (key, value) {
  if (!value.columns) {
    return { field: key, ...value }
  } else {
    // for (let i = 0; i < value.columns.length; i++) {
      const tempColumnData = []
      for (const elementKey in value.columns[0]) {
        // value.columns[i] = buildColumns(elementKey, element[elementKey])
        tempColumnData.push(buildColumns(elementKey, value.columns[0][elementKey]))
      }
      value.columns[0] = tempColumnData
    // }
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
      JSON.stringify({ msg: '原数据不是数组类型: ' + JSON.stringify(data) })
    )
  }
}
const data = [
  {
    code: {
      caption: '编码',
      columns: [
        {
          code: {
            caption: '1'
          }
        }
      ]
    },
    name: {
      caption: '名称',
      columns: [
        {
          name: {
            caption: '2',
            type: 'tree',
            minWidth: 300
          }
        }
      ]
    },
    measureUnit: {
      caption: '单位',
      columns: [
        {
          measureUnit: {
            caption: '3'
          }
        }
      ]
    },
    reviewAmount: {
      caption: '复核金额',
      columns: [
        {
          reviewAmount: {
            caption: '4',
            type: 'number',
            format: 2
          }
        }
      ]
    },
    curMonth: {
      caption: '本月',
      columns: [
        {
          currentMonthIncome: {
            caption: '收入',
            columns: [
              {
                currentMonthIncome: {
                  caption: '5'
                }
              }
            ]
          },
          cost: {
            caption: '成本',
            columns: [
              {
                currentMonthBudgetCost: {
                  caption: '应发生成本',
                  columns: [
                    {
                      currentMonthBudgetCost: {
                        caption: '6'
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  }
]

console.log(JSON.stringify(buildGridHeader(data), null, '  '))
module.exports = buildGridHeader
