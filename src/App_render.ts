import { defineComponent, h, reactive, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const img = require('./assets/logo.png') // eslint-disable-line

// 在setup中使用h函數
export default defineComponent({
  setup() {
    const state = reactive({
      name: 'Renny',
    })

    const number = ref(0)

    // const testnum = number.value // 不能將ref在return外面賦值 因為setup函數並不會重新執行只會調用h函數重新渲染node

    setInterval(() => {
      number.value += 1
    }, 1000)

    return () => {
      // const num = number.value
      return h('div', { class: 'app' }, [
        h('img', { src: img }),
        h(HelloWorld, {
          msg: state.name,
          age: 12,
        }),
        h('h2', number.value),
      ])
    }
  },
})

// h函數就是 createNode的封裝
// export default defineComponent({
//   render() {
//     return h('div', { class: 'app' }, [
//       h('img', { src: img }),
//       h(HelloWorld, {
//         msg: 'Welcome to Your Vue.js + TypeScript App',
//         age: 12,
//       }),
//     ])
//   },
// })
