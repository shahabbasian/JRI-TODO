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
        completed: false,
        id: Date.now()
      })
    },
    setComplete (id) {
      this.list.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed
        }
      })
    },
    deleteTodo (id) {
      this.list = this.list.filter(item => item.id !== id)
    },
    clearComplete () {
      this.list = this.list.filter(item => !item.completed)
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTodo, import.meta.hot))
}
