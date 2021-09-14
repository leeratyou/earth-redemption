import React, { FC, useMemo } from 'react'
import styled from 'styled-components'
import { IComment } from 'types/IComment'
import { Row, Space } from 'ui'

import { format, parseISO, isToday } from 'date-fns'
import ErrorOutline from '@material-ui/icons/ErrorOutline'

const Name = styled.div`
  color: #325a91;
  font-size: 0.9rem;
`

const Date = styled.div`
  color: #a9a9a9;
  font-size: 0.9rem;
`

const CommentContainer = styled.div`
  margin-bottom: 1.5rem;
`

const Alert = styled(ErrorOutline)`
  font-size: 1rem !important;
  color: #a9a9a9;
  :hover {
    color: #c63434;
  }
`

function getDate(createdAt: string) {
  const parsed = parseISO(createdAt)
  if (isToday(parsed)) return format(parsed, 'HH:mm')
  return format(parsed, `dd MMM 'at' HH:mm`)
}

interface Props {}

const Comment: FC<Props & IComment> = ({ _id, author, message, createdAt }) => {
  
  const date = useMemo(() => getDate(createdAt), [ createdAt ])
  
  const report = () => {
    console.log('--- Comment.tsx -> report -> ', _id)
  }
  
  return (
    <CommentContainer>
      <Row>
        <Name>{author}</Name>
        <Row>
          <Date>{date}</Date>
          <Space width={0.5} />
          <div title='Report comment' onClick={report}>
            <Alert />
          </div>
        </Row>
      </Row>
      <Space height={0.2} />
      <div>{message}</div>
    </CommentContainer>
  )
}

export default Comment
