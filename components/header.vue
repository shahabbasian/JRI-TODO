<template>
  <div class="relative flex justify-center items-end">
    <div
      class="
        absolute h-72 w-full
        bg-gradient-to-r from-purple-500 to-sky-500 opacity-50
      "
    />
    <div class="absolute mb-10 flex flex-col px-4 w-full md:w-[30rem] items-start gap-6">
      <div class="text-4xl font-bold">
        <span class="tracking-[0.4em] text-white">TODO</span>
      </div>
      <input
        id="create"
        type="text"
        name="create"
        class="w-full h-12 focus:outline-none rounded-md text-lg py-2 pl-9 pr-3"
        autofocus
        @keyup.enter="submitHandler"
      >
      <div class="absolute top-[4.82rem] left-6 border border-slate-300 h-5 w-5 rounded-full" />
    </div>
    <img src="/images/mountain.jpg" alt="Mountian" class="h-72 w-full object-cover">
  </div>
</template>

<script setup>
const submitHandler = () => {
  const el = document.getElementById('create')
  console.log(el.value)
  el.value = ''
}
</script>
