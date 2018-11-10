/**
 * 统计埋点接口
 */

module.exports = {
  '/siprts/apirecord': {
    'desc': 'API响应时间记录',
    'method': 'post',
    'param': {
      'k': {
        'desc': '',
        'required': 1,
        'def': null,
        'type': 'string',
        'reqErr': '请输入key值'
      },
      'v': {
        'desc': '可不填',
        'required': 0,
        'def': null,
        'type': 'string',
        'reqErr': '请输入value值'
      }
    },
    'token': false,
    'err_code': {},
    'test': {},
    'front': true
  },
  '/siprts/track': {
    'desc': '通用记录接口',
    'method': 'post',
    'param': {
      'k': {
        desc: '',
        required: 1,
        def: null,
        type: String,
        reqErr: '请输入key值',
        message: ''
      },
      'v': {
        desc: '',
        required: 0,
        def: null,
        type: String,
        reqErr: '请输入value值',
        message: ''
      }
    },
    'token': false,
    'err_code': {},
    'test': {},
    'front': true
  }
  // '/siprts/getKeyByHour': {
  //   'desc': '单位时间统计通用接口',
  //   'method': 'get',
  //   'param': {
  //     'key': {
  //       'desc': '',
  //       'req': 1,
  //       'type': 'string',
  //       'reqErr': '请输入key值'
  //     },
  //     'point': {
  //       'desc': '向后推多少点',
  //       'def': 24,
  //       'type': 'int'
  //     },
  //     'type': {
  //       'desc': '聚合函数 类型type',
  //       'def': 'count',
  //       'type': 'string'
  //     }
  //   },
  //   'token': false,
  //   'err_code': {},
  //   'test': {},
  //   'front': true
  // },
  // '/siprts/getKeyByday': {
  //   'desc': '单位时间统计通用接口',
  //   'method': 'get',
  //   'param': {
  //     'key': {
  //       'desc': '',
  //       'req': 1,
  //       'type': 'string',
  //       'reqErr': '请输入key值'
  //     },
  //     'point': {
  //       'desc': '向后推多少点',
  //       'def': 30,
  //       'type': 'int'
  //     },
  //     'type': {
  //       'desc': '聚合函数 类型type',
  //       'def': 'count',
  //       'type': 'string'
  //     }
  //   },
  //   'token': false,
  //   'err_code': {},
  //   'test': {},
  //   'front': true
  // }
}
