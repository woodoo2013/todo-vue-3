<template>
  <div class="todo-list">
    <ul>
      <todo-list-item v-for="todo in todos" :key="todo.id" :todo="todo" @deleteTodo="deleteTodo"/>
    </ul>
  </div>
</template>

<script>

import TodoListItem from "@/components/TodoListItem";
export default {
  name: 'HelloWorld',
  components: {
    TodoListItem
  },
  props: ['todos'],
  methods: {
    deleteTodo(id) {
      this.$emit('deleteTodo', id)
    },
  }
}
</script>


<style scoped>

.todo-list {
  display: flex;
  flex-flow: column;
  justify-content: center;
}

ul {
  display: flex;
  list-style: none;
  margin: auto;
  padding: 0;
  flex-flow: column;
  justify-content: center;
  width: 1000px;
  align-items: center;
}

h1 {
  display: flex;
  margin: 0;
  justify-content: center;
}


</style>
