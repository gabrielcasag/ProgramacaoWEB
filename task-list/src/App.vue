<template>
  <div id="app">
    <Background />
    <TaskList msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue'
import Background from './components/Background.vue'

export default {
  name: 'App',
  components: {
    TaskList,
    Background,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  z-index: 999;
}
</style>
