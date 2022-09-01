<template>
  <div class="flex flex-col">
    <transition name="switch" mode="out-in">
      <div v-if="todos.length > 0" class="flex flex-col">
        <transition-group tag="ul" name="list" appear>
          <li v-for="item in todos" :key="item.id" class="cursor-pointer py-3 px-4 border-b flex justify-between gap-3 group" @click="todo.setComplete(item.id)">
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
          </li>
        </transition-group>
      </div>
      <div v-else class="flex justify-center items-center px-4 py-3 text-slate-500">
        <span>Woohoo! nothing left todo.</span>
      </div>
    </transition>
  </div>
</template>

<script setup>
defineProps({
  todos: { type: Array, required: true }
})

const todo = useTodo()
</script>

<style scoped>
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
.list-enter-active,
.list-move {
  transition: all 0.4s ease;
}
.list-leave-active {
  transition: all 0.4s ease;
  position: absolute;
}
.switch-enter-from,
.switch-leave-to {
  opacity: 0;
  transform: translateY(20px)
}
.switch-enter-active,
.switch-leave-active {
  transition: all 0.3s ease;
}
</style>
