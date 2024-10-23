<script setup lang="ts">
import { provide } from 'vue'
import { useRoute } from 'vue-router'
import { usePostStore } from '@/stores/posts'
import { useCommentsStore } from '@/stores/commets'
import CPost from '@/components/CPost/CPost.vue'
import CCommentsList from '@/components/CCommentsList/CCommentsList.vue'

provide('deliteComment', deliteComment)

const route = useRoute()
const postStore = usePostStore()
const commentsStore = useCommentsStore()

postStore.fetchPostById(Number(route.params.id))
commentsStore.fetchComments(Number(route.params.id))

function deliteComment(id: Number) {
  commentsStore.deliteComment(id)
}
</script>

<template>
  <div class="container">
    <h1 class="page-title">ikakprosto.ru</h1>
    <CPost :post="postStore.post" />
    <CCommentsList :commentsList="commentsStore.commentsList" />
  </div>
</template>
