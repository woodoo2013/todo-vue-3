<template>
  <div class="todo-item">
    <span @click.stop :class="{done: todo.completed}">
      <input class="form-check-input position-static" type="checkbox" @click="doneTodo(todo)">
      {{ todo.title }}
    </span>
    <button class="btn btn-dark" @click="$emit('deleteTodo', todo.id)">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
  },
  methods: {
    doneTodo(todo) {
      todo.completed = !todo.completed
    }
  }
}
</script>


<style scoped>
.done {
  text-decoration: line-through;
}
span {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 500px;
  margin-top: 10px;
  font-size: 30px;
}
.todo-item {
  display: flex;
  width: 800px;
  justify-content: center;
}
button {
  margin-left: 20px;
  margin-top: 10px;
}
input {
  display: block;
  float: left;
  margin-right: 0;
}
</style>
