import { ID } from 'types/index'

export interface IComment {
  _id: ID
  cardId: ID
  author: ID
  isAnswerOn?: ID | null
  message: string
  createdAt: string
}

export type ICommentCreate = Omit<IComment, '_id'>
