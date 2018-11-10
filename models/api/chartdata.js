/**
 * 数据信息
 * */

module.exports = {
  '/chartdata/relation': {
    'desc': '团队人数',
    'method': 'post',
    'param': {
      'uid': {
        'desc': '',
        'required': 1,
        'def': null,
        'type': 'string',
        'reqErr': '请输入uid值'
      }
    },
    'token': true,
    'err_code': {},
    'test': {},
    'front': true
  },
  '/chartdata/asset': {
    'desc': '资产收益相关',
    'method': 'post',
    'param': {
      'uid': {
        'desc': '',
        'required': 1,
        'def': null,
        'type': 'string',
        'reqErr': '请输入uid值'
      }
    },
    'token': true,
    'err_code': {},
    'test': {},
    'front': true
  },
  '/chartdata/profitRatio': {
    'desc': '收益占比',
    'method': 'post',
    'param': {
      'uid': {
        'desc': '',
        'required': 1,
        'def': null,
        'type': 'string',
        'reqErr': '请输入uid值'
      },
      'range': {
        'desc': '',
        'required': 0,
        'def': null,
        'type': 'string',
        'reqErr': '请输入时间范围'
      }
    },
    'token': true,
    'err_code': {},
    'test': {},
    'front': true
  },
  '/chartdata/monthProfit': {
    'desc': '月度收益',
    'method': 'post',
    'param': {
      'uid': {
        'desc': '',
        'required': 1,
        'def': null,
        'type': 'string',
        'reqErr': '请输入uid值'
      }
    },
    'token': true,
    'err_code': {},
    'test': {},
    'front': true
  }
}
