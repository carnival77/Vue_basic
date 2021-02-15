<template>
  <div id="app">
    <todo-header></todo-header>
    <!-- <todo-input @addEvent="addTodo"></todo-input> -->
    <todo-input @addEvent="addTodo"></todo-input>
    <!-- <todo-list
       :todo-items="todoItems"
      @removeEvent="removeTodo"
      @toggleEvent="toggleTodo"
    ></todo-list> -->
    <todo-list></todo-list>
    <!-- <todo-footer @clearEvent="clearTodo"></todo-footer> -->
    <todo-footer ></todo-footer>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoFooter from "./components/TodoFooter.vue";
import TodoList from "./components/TodoList.vue";
import TodoInput from "./components/TodoInput.vue";

// export 에 default -> 우선적으로 export 하겠다.
export default {
  name: "App",
  components: {
    TodoHeader,
    TodoFooter,
    TodoList,
    TodoInput,
  },
  // data() {
  //   return {
  //     todoItems: [],
  //   };
  // },
  // methods: {
  //   // addTodo(todoItem) {
  //   //   let todoObj = { completed: false, item: todoItem };
  //   //   localStorage.setItem(todoItem, JSON.stringify(todoObj));
  //   //   this.todoItems.push(todoObj);
  //   // },
  //   // removeTodo(todoItem, index) {
  //   //   localStorage.removeItem(todoItem.item);
  //   //   this.todoItems.splice(index, 1);
  //   // },
  //   // toggleTodo(todoItem, index) {
  //   //   this.todoItems[index].completed = !this.todoItems[index].completed;
  //   //   localStorage.removeItem(todoItem.item);
  //   //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
  //   // },
  //   clearTodo() {
  //     localStorage.clear();
  //     this.todoItems = [];
  //   },
  // },
  // //life cycle method
  // created() {
  //   if (localStorage.length > 0) {
  //     for (var i = 0; i < localStorage.length; i++) {
  //       if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
  //         let itemJson = localStorage.getItem(localStorage.key(i));
  //         this.todoItems.push(JSON.parse(itemJson));
  //       }
  //     }
  //   }
  // },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
