<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" :age="12" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

interface Config {
  name: string
}

export default defineComponent({
  name: 'App',
  props: {
    number: Number as PropType<number>,
    // config: Object as PropType<Config>,
    config: {
      type: Object as PropType<Config>,
      // required: true,
    },
  },
  components: {
    HelloWorld,
  },
  mounted() {
    // this.config.name 編輯器可以判斷這樣調用是不安全的 因為有可能this.config的值是undefined
    this.config?.name
    if (this.config) {
      this.config.name
    }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
