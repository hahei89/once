# once-generate

一次操作生成 grid 和 excel 所需的标题格式

## 原数据格式

原数据格式与现有的 kaka-grid 极为相似。
kaka-grid 格式为:


```javascript
  {
    type: 'checkBox',
    readonly: rec => !this.editable,
    contentHidden: rec => !this.editable
  },
  {
    field: 'name',
    type: 'tree',
    caption: '名称',
    width: 'auto',
    minWidth: 120,
    readonly: true,
    headerStyle: {
      textAlign: 'center'
    }
  }
```
