<template>
  <div class="px-4 flex justify-center">
    <div class="w-full -mt-10 z-50 md:w-[28rem] rounded-md shadow-lg -top-5 bg-white flex flex-col">
      <NuxtChild />

      <div class="flex px-4 py-3 border-t justify-between items-center">
        <div class="text-xs">
          <span>{{ todo.activeTodo.length }} items left</span>
        </div>

        <div class="flex gap-3 text-sm">
          <div class="cursor-pointer" :class="{ 'text-slate-500': route.name !== 'index' }">
            <span>All</span>
          </div>
          <div class="cursor-pointer" :class="{ 'text-slate-500': route.name !== 'index-active' }">
            <span>Active</span>
          </div>
          <div class="cursor-pointer" :class="{ 'text-slate-500': route.name !== 'index-completed' }">
            <span>Completed</span>
          </div>
        </div>

        <div class="text-xs cursor-pointer" @click="todo.clearComplete()">
          <span>Clear Completed</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const todo = useTodo()
</script>
