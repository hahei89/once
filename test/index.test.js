// 测试 grid头的构造
const expect = require('chai').expect
const buildGridHeader = require('../src/build-grid-header.js')
const gridResult = require('./result/gridResult.js')

const dataLevel1 = [
  {
    "code": {
      "caption": "编码"
    },
    "name": {
      "caption": "名称"
    },
    "cumulative": {
      "caption": "累计应计未计",
      "columns": [
        {
          "cumulativeQuantity": {
            "caption": "数量"
          }
        }
      ]
    }
  }
]

describe('测试grid', function () {
  describe('level1', function () {
    it('输出标准grid头格式', function () {
      const gridHeader = buildGridHeader(dataLevel1)
      expect(gridHeader).to.be.eql(gridResult.level1.grid)
    })
  })
})