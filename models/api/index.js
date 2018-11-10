/**
 * author: huweijian
 * Date: 2018/11/8 - 2:08 PM
 * Name: index
 * Desc: 生成api的数据汇总
 */
const { readAllFile } = require('../../cli/tools/index')
module.exports = readAllFile(__dirname)
