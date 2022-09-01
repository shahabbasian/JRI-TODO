<template>
  <div>
    <Head>
      <Title>JRI - Active Todo</Title>
      <Meta name="description" content="Active Todo" />
    </Head>

    <List :todos="useTodo().activeTodo" />
  </div>
</template>
