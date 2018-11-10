/**
 * author: huweijian
 * increase: Firmiana
 * Date: 2018/11/8 - 11:42 AM
 * Name: utils
 * Desc: 工具方法
 */
const fs = require('fs')
const path = require('path')
const ejs = require('ejs')

/**
 * 格式化路径
 * @param file
 * @returns {*}
 */
function resolvePath (file) {
  return path.resolve(__dirname, file)
}

/**
 * 检查文件路径是否存在
 * @param path
 * @param errMsg
 */
function exists (path, errMsg) {
  let r = fs.existsSync(path)
  if (!r && errMsg) {
    console.error(errMsg)
  }
  return r
}

/**
 * 渲染模板
 * @param path 模板路径
 * @param data 数据
 * @param options  参数
 * @returns {*}
 */
function render (path, data, options = {}) {
  exists(path, '模板不存在，请检查模板路径')
  return new Promise((resolve, reject) => {
    ejs.renderFile(path, data, options, (err, res) => {
      if (err) {
        console.error(err)
        reject(err)
        return
      }
      resolve(res)
    })
  })
}

function readAllFile (file) {
  let files = fs.readdirSync(file)
  // console.log(files)
  let o = {}
  files.forEach((item) => {
    let name = item.match(/[\w_]+/)[0]
    if (name !== 'index') {
      // console.log(name, item)
      o[name] = require(`${file}/${item}`)
    }
  })
  return o
}

module.exports = {
  resolvePath,
  exists,
  render,
  readAllFile
}
