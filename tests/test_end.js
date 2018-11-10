/**
* author: Firmiana
* Date: 2018-11-10 23:06:48
* Name: test_end
* Desc: 接口测试结束
*/

/* global describe */ 
/* global it */ 
'use strict' 

describe(`结束`, function () {
  it(`结束`, function () {
    setTimeout(() => {
      process.exit(0)
    }, 1500)
  })
})