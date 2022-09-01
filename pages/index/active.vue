<template>
  <div class="flex flex-col">
    <div v-if="todo.activeTodo.length > 0" class="flex flex-col">
      <div v-for="item in todo.activeTodo" :key="item.id" class="cursor-pointer py-3 px-4 border-b flex justify-between gap-3 group" @click="todo.setComplete(item.id)">
        <div
          class="flex-none border border-slate-500 opacity-50 h-5 w-5 rounded-full"
          :class="{
            'group-hover:bg-gradient-to-br group-hover:from-purple-400 group-hover:to-sky-400': !item.completed,
            'bg-gradient-to-br from-purple-400 to-sky-400': item.completed
          }"
        />

        <s v-if="item.completed" class="flex-initial w-full text-slate-500">
          {{ item.title }}
        </s>
        <span v-else class="flex-initial w-full">{{ item.title }}</span>

        <SvgTimes class="h-6 w-auto text-slate-500 flex-none" @click.prevent="todo.deleteTodo(item.id)" />
      </div>
    </div>
    <div v-else class="flex justify-center items-center px-4 py-3 text-slate-500">
      <span>No Resualt</span>
    </div>
  </div>
</template>

<script setup>
const todo = useTodo()
</script>
