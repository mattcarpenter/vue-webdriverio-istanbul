<template>
  <div>
    <span>
      Completed:
    </span>
    <span id="completed-count">
      {{ completed() }}
    </span>
    <span>
      Pending:
    </span>
    <span id="pending-count">
      {{ pending() }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'TodoStats',
  props: ['todos'],
  data () {
    return {
    }
  },
  methods: {
    completed () {
      return this.todos.filter(todo => todo.done).length
    },
    pending () {
      return this.todos.filter(todo => !todo.done).length
    }
  }
}
</script>
