// Node.js require:
const Ajv = require('ajv')

const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

ajv.addFormat('test', (data) => {
  // 必須是字符串才能format
  console.log(data)
  return data === '2222'
})

const schema = {
  type: 'object',
  properties: {
    foo: { type: 'integer' },
    bar: { type: 'string', format: 'email' }, // json schema官方標準定義的格式
    name: { type: 'string', format: 'test' },
  },
  required: ['foo'],
  additionalProperties: false,
}

const data = {
  foo: 1,
  bar: 'abc@gmail.com',
  name: '2222',
}

const validate = ajv.compile(schema)
const valid = validate(data)
if (!valid) console.log(validate.errors)
