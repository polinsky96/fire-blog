<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost 
      v-for="(post, idx) in sampleBlogPost"
      :key="idx"
      :post="post"
      />
  </div>
</template>

<script setup>
import { reactive } from 'vue';

import BlogPost from '../components/BlogPost.vue';

const welcomeScreen = reactive({
  title: "Welcome!",
  // blogPost: "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
  blogPost: "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
  welcomeScreen: true,
  photo: "coding.jpg",
});

const sampleBlogPost = reactive([
  {
    title: "This is a filter title",
    blogHTML: "This is a filter blog post title",
    blogCoverPhoto: "beautiful-stories.jpg"
  },
  {
    title: "This is a filter title",
    blogHTML: "This is a filter blog post title",
    blogCoverPhoto: "designed-for-everyone.jpg"
  }
]);

</script>

<style>

</style>