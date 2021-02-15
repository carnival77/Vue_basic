<template>
  <div>
    <ul>
      <!-- <li v-for="(todoItem, idx) in todoItems" :key="idx"> -->
      <!-- <li v-for="(todoItem, idx) in this.$store.state.todoItems" :key="idx"> -->
      <!-- <li v-for="(todoItem, idx) in this.$store.getters.getTodoItems" :key="idx"> -->
      <li v-for="(todoItem, index) in getTodoItems" :key="index">
        <i
          class="fas fa-check checkBtn"
          :class="{ textCompleted: todoItem.completed }"
          @click="toggleTodo({todoItem, index})"
          
        ></i>
        <span :class="{ textCompleted: todoItem.completed }">{{
          todoItem.item
        }}</span>
        <span class="removeBtn" @click="removeTodo({todoItem, index})">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters,mapMutations } from "vuex";

export default {
  // props: ["todoItems"],
  computed: {
    ...mapGetters(['getTodoItems']),
  },
  methods: {
    // removeTodo: function(todoItem, index) {
      // removeTodo(todoItem, index) {
      // // this.$emit("removeEvent",todoItem,index);
      // this.$store.commit("removeTodo", { todoItem, index });
      // 중괄호로 해서 하나의 객체로 준다.
  // },
  //Helper 함수 사용
      ...mapMutations(['removeTodo','toggleTodo']),
    
    // toggleComplete: function(todoItem, index) {
    //   toggleComplete(todoItem, index) {
    //   // this.$emit("toggleEvent",todoItem,idx);
    //   this.$store.commit("toggleTodo", { todoItem, index });
    // },
    
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
</style>
