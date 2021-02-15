<template>
  <div class="hello">
    <h1>{{ msgTitle }}</h1>
    <input type="text" v-model="todoItem">
    <button v-on:click="addTodo">추가</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['msgTitle'],
  data() {
    return {
      todoItem:''
    }
  },
  methods: {
    addTodo(){
      if(this.todoItem !== ''){
        console.log(this.todoItem);
        this.$emit('addItemEvent',this.todoItem);
        // addItemEvent 가 발생했다고 부모에게 알리며, 그 컨텐츠인 todoItem도 전달.
        this.todoItem='';
      }
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
