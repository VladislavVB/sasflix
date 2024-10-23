<script setup lang="ts">
import { ref } from 'vue'
import type { PropType } from 'vue'
import type { PostInterface } from '@/types/PostsInterface'

const props = defineProps({
  post: {
    required: true,
    type: Object as PropType<PostInterface>
  }
})

const isLike = ref(false)
const isTrash = ref(false)

function like() {
  if (isTrash.value) {
    isTrash.value = false
    isLike.value = !isLike.value
  } else isLike.value = !isLike.value
}

function trash() {
  if (isLike.value) {
    isLike.value = false
    isTrash.value = !isTrash.value
  } else isTrash.value = !isTrash.value
}
</script>

<template>
  <div class="card">
    <h2 class="card-title">
      {{ props.post.title }}
    </h2>
    <p class="card-body roboto-light">{{ props.post.body }}</p>
    <div class="card-bottom roboto-light">
      <div class="action fontsize-14">
        <div class="reaction">
          <button @click="like()" class="action-btn action-like" :class="{ 'active like': isLike }">
            <img :src="isLike ? '/reactions/likeActive.svg' : '/reactions/like.svg'" alt="" />
            Like
            <span>{{ isLike ? props.post.reactions.likes + 1 : props.post.reactions.likes }}</span>
          </button>
          <button
            @click="trash()"
            class="action-btn action-trash"
            :class="{ 'active trash': isTrash }"
          >
            <img :src="isTrash ? '/reactions/trashActive.svg' : '/reactions/trash.svg'" alt="" />
            Trash
            <span>{{
              isTrash ? props.post.reactions.dislikes + 1 : props.post.reactions.dislikes
            }}</span>
          </button>
        </div>
        <RouterLink
          :to="{ name: 'post', params: { id: props.post.id } }"
          class="color-primary action-comment"
        >
          Open comments</RouterLink
        >
        <div class="tags">
          <p>Today</p>
          <span
            v-for="(tag, index) in props.post.tags"
            :class="{ first: index === 0 }"
            :key="tag"
            class="tag"
            >{{ tag }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  padding: 4px;
  margin-bottom: 32px;
  &-title {
    font-size: 26px;
    margin-bottom: 10px;
  }
  &-body {
    font-size: 20px;
    color: $text;
  }
  &-bottom {
    margin-top: 15px;
  }
}

.action {
  display: flex;
  align-items: center;
  .tags {
    display: flex;
    margin-left: 10px;
    p {
      color: rgba($specialGray, 0.5);
    }
    .tag {
      background-color: rgba($specialGray, 0.06);
      margin-left: 5px;
      padding: 0px 7px;
      border-radius: 4px;
      &.first {
        position: relative;
        margin-left: 15px;
        padding-left: 0;
        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: -11px;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: 10.5px solid transparent;
          border-bottom: 10.5px solid transparent;
          border-right: 11px solid rgba($specialGray, 0.06);
        }
      }
    }
  }

  &-btn {
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8.5px 8.5px 8.5px 12px;
    cursor: pointer;
    background-color: rgba($specialGray, 0.06);
    margin-right: 1px;
    transition: 0.3s;
    img {
      margin-right: 6px;
    }
    span {
      margin-left: 6px;
      color: $specialGray;
    }
    &:first-child {
      border-bottom-left-radius: 20px;
      border-top-left-radius: 20px;
    }
    &:last-child {
      border-bottom-right-radius: 20px;
      border-top-right-radius: 20px;
    }
    &:hover {
      background-color: $ligthGray;
    }
    &.active {
      color: $white;
    }
    &.like {
      background-color: $red;
      span {
        color: $white;
      }
    }
    &.trash {
      background-color: $black;
      span {
        color: rgba($white, 0.4);
      }
    }
  }

  &-comment {
    margin-left: 16px;
    text-decoration: underline;
  }

  .reaction {
    display: flex;
  }
}
</style>
