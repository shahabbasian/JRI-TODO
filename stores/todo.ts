import { defineStore, acceptHMRUpdate } from 'pinia'

export const useTodo = defineStore('todo', {
  state: () => ({
    list: []
  }),
  getters: {
    allTodo: state => state.list,
    activeTodo: state => state.list.filter(item => !item.completed),
    completedTodo: state => state.list.filter(item => item.completed)
  },
  actions: {
    addTodo (title) {
      this.list.push({
        title,
        completed: false
      })
    },
    setComplete (index) {
      this.list.map((item, key) => {
        if (key === index) {
          item.completed = !item.completed
        }
      })
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTodo, import.meta.hot))
}
