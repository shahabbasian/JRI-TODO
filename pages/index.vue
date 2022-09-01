<template>
  <div class="px-4 flex flex-col gap-6 justify-center items-center">
    <div class="w-full -mt-10 z-50 sm:w-[28rem] rounded-md shadow-lg -top-5 bg-white flex flex-col">
      <NuxtLoadingIndicator />
      <NuxtChild />

      <div class="flex flex-col gap-3 sm:gap-0 sm:flex-row px-4 py-3 border-t justify-center sm:justify-between items-center">
        <div class="hidden sm:flex text-xs">
          <span>{{ todo.activeTodo.length }} items left</span>
        </div>

        <div class="flex gap-3 text-sm">
          <NuxtLink to="/" class="cursor-pointer" :class="{ 'text-slate-500': route.name !== 'index' }">
            <span>All</span>
          </NuxtLink>
          <NuxtLink to="/active" class="cursor-pointer" :class="{ 'text-slate-500': route.name !== 'index-active' }">
            <span>Active</span>
          </NuxtLink>
          <NuxtLink to="/completed" class="cursor-pointer" :class="{ 'text-slate-500': route.name !== 'index-completed' }">
            <span>Completed</span>
          </NuxtLink>
        </div>

        <div class="sm:hidden w-full flex justify-between items-center">
          <div class="text-xs">
            <span>{{ todo.activeTodo.length }} items left</span>
          </div>

          <div class="text-xs cursor-pointer" @click="todo.clearComplete()">
            <span>Clear Completed</span>
          </div>
        </div>

        <div class="hidden sm:flex text-xs cursor-pointer" @click="todo.clearComplete()">
          <span>Clear Completed</span>
        </div>
      </div>
    </div>
    <div class="text-sm text-slate-500">
      <span>JRI Todo &copy;</span>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const todo = useTodo()
</script>
