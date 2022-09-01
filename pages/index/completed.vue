<template>
  <div>
    <Head>
      <Title>JRI - Completed Todo</Title>
      <Meta name="description" content="Completed Todo" />
    </Head>

    <List :todos="useTodo().completedTodo" />
  </div>
</template>
