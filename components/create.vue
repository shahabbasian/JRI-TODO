<template>
  <input
    ref="createEl"
    type="text"
    name="create"
    class="w-full h-12 focus:outline-none rounded-md text-lg py-2 pl-9 pr-3"
    autofocus
    @keyup.enter="submitHandler"
  >
</template>

<script setup>
const todo = useTodo()
const createEl = ref(null)

const submitHandler = () => {
  todo.addTodo(createEl.value.value)
  createEl.value.value = ''
}
</script>
