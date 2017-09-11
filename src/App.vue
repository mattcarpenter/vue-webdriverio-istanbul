<template>
  <div id="app">
    <todo-list v-bind:todos="todos"/>
  </div>
</template>

<script>
import TodoList from './components/TodoList'

export default {
  name: 'app',
  components: {
    TodoList
  },
  data () {
    return {
      todos: [
        {
          text: 'todo 1',
          done: false
        },
        {
          text: 'todo 2',
          done: false
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
