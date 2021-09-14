import { makeAutoObservable } from 'mobx'
import { IComment } from 'types/IComment'

import comments from 'fixtures/comments'
import cardsStore from 'store/cards'

function byDate(a: IComment, b: IComment) {
  return b.createdAt.localeCompare(a.createdAt)
}

class CommentsStore {
  
  constructor() {
    makeAutoObservable(this)
  }
  
  comments: IComment[] = comments
  
  get currentComments() {
    return this.comments.filter(comment => comment.cardId === cardsStore.current?._id).sort(byDate) || []
  }
  
}

const commentsStore = new CommentsStore()
export default commentsStore
