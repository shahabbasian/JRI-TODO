<template>
  <div class="flex flex-col">
    <div class="flex flex-col">
      <div v-for="(item, index) in todo.allTodo" :key="index" class="cursor-pointer py-3 px-4 border-b flex gap-3 group" @click="complete(index)">
        <div
          class="border border-slate-500 opacity-50 h-5 w-5 rounded-full"
          :class="{
            'group-hover:bg-gradient-to-br group-hover:from-purple-400 group-hover:to-sky-400': !item.completed,
            'bg-gradient-to-br from-purple-400 to-sky-400': item.completed
          }"
        />
        <s v-if="item.completed" class="text-slate-500">
          {{ item.title }}
        </s>
        <span v-else>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const todo = useTodo()

const complete = (index) => {
  todo.setComplete(index)
}
</script>
