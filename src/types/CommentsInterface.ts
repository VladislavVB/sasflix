export interface CommetnsInterface {
  comments: CommentInterface[]
  total: number
  skip: number
  limit: number
}

export interface CommentInterface {
  id: number
  body: string
  postId: number
  likes: number
  user: UserInterface
}

export interface UserInterface {
  id: number
  username: string
  fullName: string
}
