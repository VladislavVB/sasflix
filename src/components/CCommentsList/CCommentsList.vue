<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { CommetnsInterface } from '@/types/CommentsInterface'
import CComment from '@/components/CComment/CComment.vue'

const props = defineProps({
  commentsList: {
    required: true,
    type: Object as PropType<CommetnsInterface>
  }
})

const titleCommet = computed(() => {
  const absCount = Math.abs(props.commentsList.comments.length)

  if (absCount % 10 === 1 && absCount % 100 !== 11) {
    return 'комментарий'
  } else if (
    absCount % 10 >= 2 &&
    absCount % 10 <= 4 &&
    (absCount % 100 < 10 || absCount % 100 >= 20)
  ) {
    return 'комментария'
  } else {
    return 'комментариев'
  }
})
</script>
<template>
  <div>
    <h2 class="commentlist-title">{{ props.commentsList.comments.length }} {{ titleCommet }}</h2>
    <CComment v-for="comment in props.commentsList.comments" :key="comment.id" :comment="comment" />
  </div>
</template>

<style lang="scss">
.commentlist-title {
  font-size: 26px;
}
</style>
