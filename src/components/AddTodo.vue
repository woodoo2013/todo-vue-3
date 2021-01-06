<template>
  <form @submit.prevent="onSubmit">
    <input placeholder="Add a new task" v-model="title" type="text">
    <button class="btn btn-dark" type="submit">Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTask = {
          id: Date.now(),
          title: this.title,
          completed: false
        }
      this.$emit('addNewTask', newTask)
      this.title = ''
      }
    }
  }
}
</script>

<style scoped>
  form {
    margin: 20px;
    display: flex;
    justify-content: center;
  }
  button {
    width: 50px;
    margin-left: 9px;
  }

  input {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 20px;
    border: 1px solid black;
  }
</style>