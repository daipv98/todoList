<template>
    <div id="app">
      <component-todoList></component-todoList>
      
      
    </div>
</template>

<script>
import ComponentTodoList from './components/TodoList'
import {mapState} from 'vuex'
export default {
  name: 'App',
  
  components: {
    ComponentTodoList,

  },
  computed: mapState(['todos']),
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>