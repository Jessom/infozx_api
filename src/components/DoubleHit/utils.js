// 递归查询当前所在部门
export const deepFind = (arr, id, cb) => {
  if(!arr) return
  for(let i = 0, len = arr.length; i < len; i++) {
    let item = arr[i]
    if(item.id === id) {
      cb(item)
    } else {
      deepFind(item.children, id, cb)
    }
  }
}

// 选择 or 取消
export const select = (dom, item, arr) => {
  if(dom.classList.contains('mui-selected')) {
    dom.classList.remove('mui-selected')
    arr.splice(arr.findIndex(i => i.id === item.id), 1)
  } else {
    dom.classList.add('mui-selected')
    arr.push(item)
  }
}

// 清除已选项
export const clearSelect = (doms) => {
  if(doms.length) {
    doms.each((ind, item) => {
      item.classList.remove('mui-selected')
    })
  }
}