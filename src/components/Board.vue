<template>
  <div class="board">
    <todos v-for="boardItem in boardItems" :boardItem="boardItem" :key="boardItem"></todos>
  </div>
</template>

<script>
import Todos from "@/views/Todos";

export default {
  data() {
    return {
      boardItems: [
        'Done',
        'In progress',
        'Not sorted'
      ]
    }
  },
  components: {
    Todos
  }
}
</script>

<style scoped>
.board {
  display: flex;
  flex-flow: row;
  justify-content: center;
}

</style>