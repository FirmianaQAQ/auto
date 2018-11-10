/**
 * author: Firmiana
 * Date: 2018-11-10 23:06:48
 * Name: chartdata
 * Desc: chartdata
 */


module.exports = {
  render: true,
  file: {
    name: 'chartdata',
    desc: 'chartdata'
  },
  content: [
    {
      url:'/chartdata/relation',
      desc:'团队人数',
      method:'post'
    },
    {
      url:'/chartdata/asset',
      desc:'资产收益相关',
      method:'post'
    },
    {
      url:'/chartdata/profitRatio',
      desc:'收益占比',
      method:'post'
    },
    {
      url:'/chartdata/monthProfit',
      desc:'月度收益',
      method:'post'
    }
  ]
}