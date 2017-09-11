<template>
  <div class="hello">
    <h1>Todo List</h1>
    <todo-stats v-bind:todos="todos"></todo-stats>
    <ul>
      <todo-item
        v-for="todo in todos"
        :key="todo.id"
        v-bind:todo="todo"
        v-on:remove-todo="removeTodo"></todo-item>
    </ul>
    <div class="controls">
      <input type="text" id="new-todo-input" v-model="newTodoText"><br/>
      <a href="#" v-on:click="createTodo" id="new-todo">Create</a>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem'
import TodoStats from './TodoStats'

export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    TodoItem,
    TodoStats
  },
  data () {
    return {
      newTodoText: ''
    }
  },
  methods: {
    removeTodo (todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos.splice(todoIndex, 1)
    },
    createTodo () {
      this.todos.push({
        text: this.newTodoText,
        done: false
      })
      this.newTodoText = ''
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px;
}

a {
  color: #42b983;
}
</style>
