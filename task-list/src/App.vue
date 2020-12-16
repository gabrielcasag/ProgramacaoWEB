<template>
  <div id="app">
    <TaskList :tasks="tasks"></TaskList>
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue'
//import Background from './components/Background.vue'

export default {
  name: 'App',
  components: {
    TaskList,
    //Background,
  },
  data() {
    return {
      tasks: [
        {
          title: 'Make todo list',
          completed: true
        },
        {
          title: 'Go skydiving',
          completed: false
        }
      ]
    }
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
