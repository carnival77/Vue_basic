<template>
  <div>
    <h2>View Post</h2>
    <div v-if="loading">Loading...</div>
    <!-- <div v-if="post"> -->
    <!-- <h3>[ID: {{ post.id }}]</h3>
      <div>{{ post.text }}</div> -->
    <div v-if="getPost">
      <h3>[ID: {{ getPost.id }}]</h3>
      <div>{{ getPost.text }}</div>
    </div>
  </div>
</template>

<script>
// import { Post } from "../api";

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      //   post: null,
      loading: true,
    };
  },
  created() {
    this.fetchData();
  },
  watch: { $route: "fetchData" },
  computed: {
    ...mapGetters(["getPost"]),
  },
  methods: {
    fetchData() {
      //   this.post = null;
      //   this.$store.dispatch('loadPost',{id:this.$route.params.id});
      this.loading = true;
      this.$store.dispatch("loadPost", { id: this.$route.params.id });
      //   Post.get(this.$route.params.id).then((data) => {
      // this.post = data;
      this.loading = false;
    },
  },
};
</script>
