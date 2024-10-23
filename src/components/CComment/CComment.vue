<script setup lang="ts">
import type { PropType } from 'vue'
import type { CommentInterface } from '@/types/CommentsInterface.ts'
import { inject } from 'vue'

const props = defineProps({
  comment: {
    required: true,
    type: Object as PropType<CommentInterface>
  }
})

const deliteComment = inject('deliteComment', Number)

function handleDeliteComment() {
  deliteComment(props.comment.id)
}
</script>

<template>
  <div v-if="props.comment.body" class="comment">
    <div class="comment-avatar"></div>
    <div class="comment-content">
      <h3 class="comment-title">{{ props.comment.user.fullName }}</h3>
      <p class="comment-text">{{ props.comment.body }}</p>
      <div class="comment-actions">
        <p>Today</p>
        <button @click="handleDeliteComment()" class="comment-delite">Удалить</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.comment {
  display: flex;
  margin-top: 24px;
  &-avatar {
    width: 46px;
    height: 46px;
    border-radius: 100%;
    border: 3px solid $black;
    margin-right: 8px;
  }
  &-title {
    font-size: 20px;
    margin-bottom: 8px;
  }
  &-text {
    font-size: 16px;
  }
  &-actions {
    display: flex;
    font-size: 12px;
    align-items: center;
    margin-top: 10px;
    p {
      color: rgba($specialGray, 0.5);
    }
    .comment-delite {
      color: $red;
      border: none;
      background-color: transparent;
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
