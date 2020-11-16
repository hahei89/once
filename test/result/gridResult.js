module.exports = {
  level1: {
    grid: [
      {
        field: 'code',
        caption: '编码'
      },
      {
        field: 'name',
        caption: '名称'
      },
      {
        // field: 'cumulative',
        caption: '累计应计未计',
        columns: [
          {
            field: 'cumulativeQuantity',
            caption: '数量'
          }
        ]
      }
    ]
  }
}
