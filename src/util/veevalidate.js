import { extend, localize } from 'vee-validate'
import { required, email, min, length, confirmed } from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_CN.json'

extend('email', email)
extend('required', required)
extend('min', min)
extend('length', length)
extend('confirmed', confirmed)

localize('zh_CN', {
  messages: {
    ...zh.messages,
    required: '请输入{_field_}',
    username: '请输入正确的{_field_}',
    min: '不符合最小长度要求',
    length: (field) => `${field}要求长度4位`
  },
  names: {
    email: '邮箱',
    password: '密码',
    name: '昵称',
    code: '验证码',
    username: '账号',
    repass: '确认密码'
  },
  fields: {
  }
})
