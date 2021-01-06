<template>
  <div>
    <h1>Todo List Vue 3</h1>
    <hr>
    <router-link to="/">Home</router-link>
    <router-link to="/todos">Todos</router-link>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  text-decoration: none;
  margin: 20px;
  font-size: 40px;
  color: #2C3E50;
}

h1 {
  margin-top: 20px;
}
</style>
