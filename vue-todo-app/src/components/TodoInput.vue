<template>
  <div class="inputBox shadow">
    <input type="text" v-model="todoItem" @keyup.enter="addTodo" />
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todoItem: "",
    };
  },
  methods: {
    addTodo() {
      //   console.log(this.todoItem);
      if (this.todoItem !== "") {
        //this.$emit("addEvent", this.todoItem);
        this.$store.commit('addTodo',this.todoItem);
        this.clearInput();
      }
    },
    clearInput() {
      this.todoItem = "";
    },
  },
};
</script>
<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
