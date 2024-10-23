import { defineStore } from 'pinia'
import axios from 'axios'
import type { PostInterface } from '@/types/PostsInterface'

export const usePostStore = defineStore('Post', {
  state: () => ({
    posts: [] as Array<PostInterface>,
    post: {} as PostInterface,
    loading: false,
    error: null as string | null
  }),
  actions: {
    async fetchPosts() {
      this.loading = true
      this.error = null

      try {
        const response = await axios.get('https://dummyjson.com/posts', {
          params: { limit: 5 }
        })
        this.posts = response.data.posts
      } catch (err) {
        this.error = (err as Error).message
      } finally {
        this.loading = false
      }
    },
    async fetchPostById(id: number) {
      this.loading = true
      this.error = null

      try {
        const response = await axios.get(`https://dummyjson.com/posts/${id}`)

        this.post = response.data
      } catch (err) {
        this.error = (err as Error).message
      } finally {
        this.loading = false
      }
    }
  }
})
