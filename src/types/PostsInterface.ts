export interface PostInterface {
  id: number
  title: string
  body: string
  tags: Array<string>
  reactions: PostReactionsInterface
  views: number
  userId: number
}

export interface PostReactionsInterface {
  likes: number
  dislikes: number
}
