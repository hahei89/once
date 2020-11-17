// 测试 grid头的构造
const expect = require('chai').expect
const buildGridHeader = require('../src/build-grid-header.js')
const gridResult = require('./result/gridResult.js')

// TODO: 回调函数
// TODO: type: 'checkbox', 即没有field属性
// TODO: baseStyle 构造
const dataLevel0 = [
  {
    code: {
      caption: '编码',
      readonly: "rec => !this.editable",
      contentHidden: "rec => !this.editable"
    },
    name: {
      caption: '名称'
    }
  }
]

const dataLevel1 = [
  {
    code: {
      caption: '编码'
    },
    name: {
      caption: '名称'
    },
    cumulative: {
      caption: '累计应计未计',
      columns: [
        {
          cumulativeQuantity: {
            caption: '数量'
          }
        }
      ]
    }
  }
]

describe('测试grid', function () {
  describe('level0', function () {
    it('输出0层嵌套grid头格式', function () {
      const gridHeader = buildGridHeader(dataLevel0)
      expect(gridHeader).to.be.eql(gridResult.level0.grid)
    })
  })
  describe('level1', function () {
    it('输出1层嵌套grid头格式', function () {
      const gridHeader = buildGridHeader(dataLevel1)
      expect(gridHeader).to.be.eql(gridResult.level1.grid)
    })
  })
})
