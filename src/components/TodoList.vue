<template>
  <div class="todo-list">
    <ul>
      <todo-list-item
          v-for="(todo, index) in todos"
          :index="index"
          :key="todo.id"
          :todo="todo"
          @removeTodo="removeTodo"
      />
    </ul>
  </div>
</template>

<script>

import TodoListItem from "@/components/TodoListItem";


export default {
  name: 'TodoList',
  components: {
    TodoListItem
  },
  props: ['todos', 'index'],
  methods: {
    removeTodo(id) {
      this.$emit('removeTodo', id - 1)
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
  width: 500px;
  align-items: center;
}

h1 {
  display: flex;
  margin: 0;
  justify-content: center;
}


</style>
