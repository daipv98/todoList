<template>
  <tr>
    <td>{{ item.name }}</td>
    <td>{{ item.deadline }}</td>
    <th>
       <button @click="editTodo(index)" class="btn btn-warning">Edit</button>
      <button
        @click="removeTodo(index)"
        class="btn btn-warning"
        style="background-color: red"
      >
        Delete
      </button>
    </th>
  </tr>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  name: "items-component",
  props: ['item','index'],
  methods: {...mapActions(['editTodo','removeTodo'])}

};
</script>