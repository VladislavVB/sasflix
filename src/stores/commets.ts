import { defineStore } from 'pinia'
import axios from 'axios'
import type { CommetnsInterface } from '@/types/CommentsInterface'

export const useCommentsStore = defineStore('Comments', {
  state: () => ({
    commentsList: {} as CommetnsInterface,
    loading: false,
    error: null as string | null
  }),
  actions: {
    async fetchComments(id: Number) {
      this.loading = true
      this.error = null

      try {
        const response = await axios.get(`https://dummyjson.com/posts/${id}/comments`)
        this.commentsList = response.data
      } catch (err) {
        this.error = (err as Error).message
      } finally {
        this.loading = false
      }
    },
    deliteComment(id: Number) {
      this.commentsList.comments = this.commentsList.comments.filter((comment) => comment.id !== id)
    }
  }
})
