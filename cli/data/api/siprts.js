/**
 * author: Firmiana
 * Date: 2018-11-10 23:06:48
 * Name: siprts
 * Desc: siprts
 */


module.exports = {
  render: true,
  file: {
    name: 'siprts',
    desc: 'siprts'
  },
  content: [
    {
      url:'/siprts/apirecord',
      desc:'API响应时间记录',
      method:'post'
    },
    {
      url:'/siprts/track',
      desc:'通用记录接口',
      method:'post'
    }
  ]
}