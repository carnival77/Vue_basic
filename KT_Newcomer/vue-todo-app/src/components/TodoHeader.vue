<template>
  <div>
      <h1>TO DO</h1>
      <p>{{mode}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mode:process.env.VUE_APP_TITLE
    }
  },
};
</script>
<style scoped>
h1 {
  color: #2f3852;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
</style>
