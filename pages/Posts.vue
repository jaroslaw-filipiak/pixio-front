<template>
  <ul>
    <li v-for="(post, index) in posts" :key="index">{{ post.title }}</li>
  </ul>
</template>

<script>
import { getPosts } from "../api/posts";
export default {
  async asyncData() {
    const posts = await getPosts();
    return { posts: posts };
  },
};
</script>

<style>
</style>