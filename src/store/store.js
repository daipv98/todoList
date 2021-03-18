import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const storeData = {
  
  state: {
    isEditing: false,
    todos: [],
    selectedTodo: {},
    selectedIndex: null,
    search: '',
  },
  
  mutations: {
    
    storeTodo(state) {
      state.todos.push(state.selectedTodo)
      state.selectedTodo = {}
      localStorage.setItem('myStore2', JSON.stringify(state.todos))
    },
    removeTodo(state, index) {
      state.todos.splice(index, 1)
      localStorage.setItem('myStore2', JSON.stringify(state.todos))
    },
    updateTodo(state) {
      state.todos[state.selectedIndex] = state.selectedTodo;
      state.selectedTodo = {}
      state.isEditing = false
      localStorage.setItem('myStore2', JSON.stringify(state.todos))
    },
    editTodo(state, index) {
      state.isEditing = true
      state.selectedTodo = state.todos[index];
      state.selectedIndex = index;
      localStorage.setItem('myStore2', JSON.stringify(state.todos))
    },
  },
  actions: {
    storeTodo({ commit }) {
      commit('storeTodo')
    },
    removeTodo({ commit }) {
      commit('removeTodo')
    },
    updateTodo({ commit }) {
      commit('updateTodo')
    },
    editTodo({ commit }) {
      commit('editTodo')
    }
    
  },
  getters: {
    todos: state => state.todos,
    filterList:
      state => state.todos.filter(item => {
        return item.name.toLowerCase().includes(state.search.toLowerCase())
      })

  }
}
const store = new Vuex.Store(storeData)
export default store