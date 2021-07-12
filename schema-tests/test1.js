// Node.js require:
const Ajv = require('ajv')
const localize = require('ajv-i18n')
const addFormats = require('ajv-formats')
const addErrors = require('ajv-errors')

const ajv = new Ajv({ allErrors: true }) // options can be passed, e.g. {allErrors: true}
addFormats(ajv)
addErrors(ajv)

ajv.addFormat('test', (data) => {
  // 必須是字符串才能format
  console.log(data)
  return data === '2222'
})

ajv.addKeyword('testKey', {
  // 可以定義不同方法在不同時機被調用
  // macro() {
  //   // 增加不同的屬性
  //   return {
  //     minLength: 10,
  //   }
  // },
  // validate: function fun(schema, data) {
  //   fun.errors = [
  //     {
  //       keyword: 'testKey',
  //       message: 'Hello messge error',
  //     },
  //   ]
  //   return false
  // },
  // compile(sch, parentSch) {
  //   console.log(sch, parentSch)
  //   return () => true
  // },
  // metaSchema: {
  //   // key value的類型
  //   type: 'boolean',
  // },
  // validate(schema, data) {
  //   console.log(schema, data)
  //   if (data === '2222') {
  //     return true
  //   }
  //   return false
  // },
})

const schema = {
  type: 'object',
  properties: {
    foo: { type: 'integer' },
    bar: { type: 'string', format: 'email' }, // json schema官方標準定義的格式
    name: {
      type: 'string',
      // testKey: true,
      minLength: 10,
      errorMessage: {
        type: '必須是字符串',
        minLength: '長度不得小於10',
      },
    },
  },
  required: ['foo'],
  additionalProperties: false,
}

const data = {
  foo: 1,
  bar: 'abc@gmail.com',
  name: '22',
}

const validate = ajv.compile(schema)
const valid = validate(data)
if (!valid) {
  // ru for Russian
  // localize['zh-TW'](validate.errors)
  // string with all errors and data paths
  // console.log(ajv.errorsText(validate.errors, { separator: '\n' }))
  console.log(validate.errors)
}
