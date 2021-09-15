import { makeAutoObservable } from 'mobx'
import { IComment, ICommentCreate } from 'types/IComment'

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
  
  addComment = async (comment: ICommentCreate) => {
    this.comments.push({ _id: Date.now(), ...comment })
  }
  
}

const commentsStore = new CommentsStore()
export default commentsStore
