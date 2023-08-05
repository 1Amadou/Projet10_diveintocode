<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- コード1 HelloWorldコンポーネントを使用 -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// コード2 HelloWorldコンポーネントをimport
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  // コード3 コンポーネントを登録
  components: {
    HelloWorld
  }
}
</script>