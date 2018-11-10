/**
 * author: Firmiana
 * Date: 2018/11/10 - 03:24 AM
 * Name: utils
 * Desc: 自动生成测试文件  方法
 */
const fs = require('fs')
const os = require('os')
const { render, resolvePath, exists } = require('./index')


let userInfo = os.userInfo()
let username = (userInfo.username === '93517') ? "Firmiana" : userInfo.username
let someFileInfo = {
  author: username,
  date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
}

/**
* 生成待渲染数据
* @param api api路径
* @param fileSrc 根目录
* @param fileTpl 模板
*/
async function TestApiSet(api, fileSrc, fileTpl) {
  let src = resolvePath(fileSrc)
  let tpl = resolvePath(fileTpl)
  let apiFileExists = exists(src)
  if (!apiFileExists) {
    fs.mkdirSync(src)
  }
  let apiFileName = ''
  let contentBase = []
  for (let i in api) {
    let item = api[i]
    apiFileName = i
    for (let k in item) {
      let base = {
        name: apiFileName,
        url: k,
        desc: item[k].desc,
        method: item[k].method,
      }
      contentBase.push(base)
      let fileSet = {
        file: {
          ...someFileInfo,
          name: apiFileName,
          desc: apiFileName
        },
        content: contentBase
      }
      let r = await render(tpl, fileSet)
      fs.writeFileSync(`${src}/${i}.js`, r)
    }
  }
  console.log('\x1b[32m', '✔  成功生成待渲染文件', '\033[0m')
  return 'ok'
}

/**
 * 生成标准文件
 * @param fileSrc  生成文件的根目录
 * @param fileTpl  生成文件所需的模板
 * @param fileName 生成文件的名字
 * @param fileDesc 生成文件的描述
 * @returns {Promise<void>}
 */
async function testAuto(fileSrc, fileTpl, fileName, fileDesc) {
  let src = resolvePath(fileSrc)
  let tpl = resolvePath(fileTpl)
  let apiFileExists = exists(src)
  if (!apiFileExists) {
    fs.mkdirSync(src)
  }
  let fileSet = {
    file: {
      ...someFileInfo,
      name: fileName,
      desc: fileDesc
    },
    content: fileName
  }
  let fileRender = await render(tpl, fileSet)
  fs.writeFileSync(`${src}/${fileName}.js`, fileRender)
  console.log('\x1b[32m', '✔  自动生成文件 -->', fileSrc+' -->',fileName + '.js', '\033[0m')
}

/**
 * 文件目录提示
 * @param color  控制台色彩
 * @param fileList  文件所属目录
 * @returns {Promise<void>}
 */
async function testSrcTip(fileList, color) {
  switch (color) {
    case 'g':
      console.log('\x1b[32m', '所属目录:  ', fileList, '\033[0m')
      break;
    default:
      console.log('所属目录:  ', fileList)
      break;
  }
}

module.exports = {
  TestApiSet,
  testAuto,
  testSrcTip
}