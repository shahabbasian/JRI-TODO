<template>
  <div class="relative flex justify-center items-end">
    <div
      class="
        absolute h-72 w-full
        bg-gradient-to-br from-purple-500 to-sky-500 opacity-50
      "
    />
    <div class="absolute mb-16 flex flex-col px-4 w-full sm:w-[30rem] items-start gap-6">
      <div class="text-4xl font-bold">
        <span class="tracking-[0.4em] text-white">TODO</span>
      </div>

      <Create />

      <div class="absolute top-[4.82rem] left-6 border border-slate-300 h-5 w-5 rounded-full" />
    </div>

    <img src="/images/mountain.jpg" alt="Mountian" class="h-72 w-full object-cover">
  </div>
</template>
