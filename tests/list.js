/**
* author: Firmiana
* Date: 2018-11-10 12:48:19
* Name: list
* Desc: 列表
*/

export default {

  /**
  * 获取姓名
  * @param data {object} 参数
  * @param config {object} 可能回有的配置
  * @returns {Promise<*>}
  */
  async getName (data = {1}, config = {2}) {
  let r = await toaioxs('
  /list/name', data, config)
  return r
  },
  
  /**
  * 获取年龄
  * @param data {object} 参数
  * @param config {object} 可能回有的配置
  * @returns {Promise<*>}
  */
  async getAge (data = {1}, config = {2}) {
  let r = await toaioxs('
  /list/age', data, config)
  return r
  },
  
  /**
  * 获取性别
  * @param data {object} 参数
  * @param config {object} 可能回有的配置
  * @returns {Promise<*>}
  */
  async getSex (data = {1}, config = {2}) {
  let r = await toaioxs('
  /list/age', data, config)
  return r
  }
  
  }