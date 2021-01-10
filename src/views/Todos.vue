<template>
  <div>
    <h2>{{ boardItem }}</h2>
    <add-todo @addNewTask="addNewTask"/>
    <Loader v-if="loading"/>
    <todo-list v-else-if="todos.length" :todos="todos" @removeTodo="removeTodo" />
    <h3 v-else>Пока запланированых дел нет</h3>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import Loader from "@/components/Loader"

export default {
  name: 'App',
  data() {
    return {
      loading: true,
      todos: [],
    }
  },
  props: {
    boardItem: String,
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
        .then(response => response.json())
        .then(json => {
          this.todos = json
          this.loading = false
        })

  },
  components: {
    Loader,
    AddTodo,
    TodoList,
  },
  methods: {
    removeTodo(id) {
      this.todos.splice(id - 1, 1)
    },
    addNewTask(newTask) {
      this.todos.push(newTask)
    }
  }
}
</script>