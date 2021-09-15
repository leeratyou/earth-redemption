import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'

import Modal from './Modal'
import Card from 'components/Card'
import Comment from 'components/Comment'

import { useStore } from 'store'
import { Center, Row, Space } from 'ui'
import { Button, TextField } from '@material-ui/core'
import { ICommentCreate } from 'types/IComment'

const Shadow = styled.div`
  box-shadow: 0 3px 12px -4px rgba(0,0,0,0.4);
`

interface Props {}

const ViewCard: FC<Props> = () => {
  
  const { cardsStore: { current }, commentsStore: { currentComments, addComment }, userStore: { userId, isAuth } } = useStore()
  
  const [ newComment, setNewComment ] = useState('')
  
  const onChange = (e: any) => setNewComment(e.target.value)
  
  const onClose = () => setNewComment('')
  
  const add = () => {
    const c: ICommentCreate = {
      author: userId!,
      cardId: current._id,
      message: newComment,
      createdAt: new Date().toISOString()
    }
    addComment(c)
    setNewComment('')
  }
  
  return (
    <Modal name='viewCard' title='View Card' onClose={onClose}>
      <Center>
        <Shadow>
          <Card {...current} />
        </Shadow>
      </Center>
      <Space height={3} />
      {currentComments.length
        ? currentComments.map(comment => <Comment key={comment._id} {...comment} />)
        : <Center>No comments yet</Center>
      }
      <Space height={1} />
      <TextField
        label='Comment'
        multiline
        rows={3}
        value={newComment}
        onChange={onChange}
        variant='outlined'
        fullWidth
        placeholder={isAuth ? 'What do you think about this card?' : 'You need log in to write a comment'}
        disabled={!isAuth}
      />
      <Row justify='end'>
        <Button disabled={!newComment || !isAuth} onClick={add}>Post</Button>
      </Row>
    </Modal>
  )
}

export default observer(ViewCard)
