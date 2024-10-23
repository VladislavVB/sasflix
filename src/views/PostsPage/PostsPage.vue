<script setup lang="ts">
import { usePostStore } from '@/stores/posts'
import CPost from '@/components/CPost/CPost.vue'

const postStore = usePostStore()

postStore.fetchPosts()
</script>

<template>
  <div class="container">
    <h1 class="page-title">ikakprosto.ru</h1>
    <CPost v-for="post in postStore.posts" :key="post.id" :post="post" />
  </div>
</template>
