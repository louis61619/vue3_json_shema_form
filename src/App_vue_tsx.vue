<script lang="tsx">
import { defineComponent, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const img = require('./assets/logo.png') // eslint-disable-line

function renderHelloWorld(num: number) {
  return <HelloWorld age={num} />
}

// 在setup中使用h函數
export default defineComponent({
  setup() {
    const number = ref(0)

    // const testnum = number.value // 不能將ref在return外面賦值 因為setup函數並不會重新執行只會調用h函數重新渲染node

    setInterval(() => {
      number.value += 1
    }, 1000)

    return () => {
      // const num = number.value
      return (
        <div>
          <h2 class="title">{number.value}</h2>
          <img src={img} />
          <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" age={12} />
          {renderHelloWorld(16)}
        </div>
      )
    }
  },
})
</script>

<style scoped>
.title {
  color: red;
}
</style>
