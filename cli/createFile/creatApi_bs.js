/**
 * author: Firmiana
 * Date: 2018/11/9 - 04:35 AM
 * Name: 生成后端api接口测试
 * Desc: 自动生成测试文件
 */

const { TestApiSet, testBase, testConn, testApiRun, testVoca, testEnd } = require('../tools/test_auto')

/**
* 定义接口测试根目录
*/
const testApiPath = '../../tests'
const api = require('../../models/api')

async function go() {
  // 生成api待渲染文件
  await TestApiSet(
    api,
    '../data/api',
    '../template/api-test-info.ejs'
  )

  // 生成起始文件
  await testBase(
    testApiPath,
    '../template/api-test-base.ejs',
    'aaa_aBase',
    '接口测试开始，设置相关配置'
  )

  // 生成连通性测试文件
  await testConn(
    testApiPath,
    '../template/api-test-conn.ejs',
    'aaa_aConn',
    '接口连通性测试'
  )

  // 生成中间文件
  await testApiRun(
    testApiPath,
    '../template/api-test.ejs',
    '../data/api/index'
  )

  // 生成中间文件
  await testVoca(
    testApiPath,
    '../template/api-test-voca.ejs',
    'yyy_yVoca',
    '接口业务性测试'
  )

  // 生成结束文件
  await testEnd(
    testApiPath,
    '../template/api-test-end.ejs',
    'zzz_zEnd',
    '接口测试结束'
  )

}

go()