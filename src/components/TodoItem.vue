<template>
  <li>
    <div class="content" v-show="!isEditing">
      <div class="meta"
        v-bind:class="{ done: todo.done }"
        v-on:click="toggle">
        {{ todo.text }}
      </div>
      <div class="extra">
        <a href="#" v-on:click="edit">Edit</a> |
        <a href="#" v-on:click="remove">Remove</a>
      </div>
    </div>
    <div class="content" v-show="isEditing">
      <div class="meta">
        <input type="text" v-model="text">
      </div>
      <div class="extra">
      <a href="#" v-on:click="save">Save</a> |
      <a href="#" v-on:click="cancel">Cancel</a>
    </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo'],
  data () {
    return {
      text: this.todo.text,
      isEditing: false
    }
  },
  methods: {
    edit () {
      this.isEditing = true
    },
    remove () {
      this.$emit('remove-todo', this.todo)
    },
    cancel () {
      this.isEditing = false
    },
    save () {
      this.todo.text = this.text
      this.isEditing = false
    },
    toggle () {
      this.todo.done = !this.todo.done
    }
  }
}
</script>

<style scoped>
  .meta {
    display: inline-block;
    width: 200px;
  }

  .meta.done {
    text-decoration: line-through;
  }

  .extra {
    display: inline-block;
  }
</style>
