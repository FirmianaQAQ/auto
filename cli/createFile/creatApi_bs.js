/**
 * author: Firmiana
 * Date: 2018/11/9 - 04:35 AM
 * Name: 生成后端api接口测试
 * Desc: 自动生成测试文件
 */

const { testAuto, TestApiSet } = require('../tools/test_auto')

//定义接口测试根目录
const testApiPath = '../../tests'
const api = require('../../models/api')

//生成api待渲染文件
TestApiSet(
  api,
  '../data/api',
  '../template/api-test-info.ejs'
)

//生成起始文件
testAuto(
  testApiPath,
  '../template/api-test-begin.ejs',
  'test_begin',
  '接口测试开始，获取登陆信息'
)

//TODO 生成中间文件

//生成结束文件
testAuto(
  testApiPath,
  '../template/api-test-end.ejs',
  'test_end',
  '接口测试结束'
)
