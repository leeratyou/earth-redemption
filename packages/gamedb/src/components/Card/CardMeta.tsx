import React, { FC } from 'react'
import styled from 'styled-components'

import Rating from '@material-ui/lab/Rating'

import { Row, Space } from 'ui'
import { ICard, ICardMeta } from 'types/ICard'
import { observer } from 'mobx-react-lite'
import { useStore } from 'store'

const SmallText = styled.div`
  font-size: 0.8rem !important;
  color:#727272;
`

const CardMetaWrap = styled(Row)`
  overflow: hidden;
  width: 18rem;
`

const User = styled.div`
  text-align: right;
  max-width: 10rem;
  overflow: hidden;
  white-space: nowrap;
  font-size: 0.8rem !important;
  color:#727272;
  text-decoration: underline;
  cursor: pointer;
`

interface Props {

}

const CardMeta: FC<Props & ICard> = ({ meta }) => {
  const { author, rating } = meta
  
  const { modalsStore: { setOpen } } = useStore()
  
  return (
    <CardMetaWrap>
      <Row justify='start'>
        <Rating value={rating} readOnly size="small" precision={0.5} /> <SmallText>{rating}</SmallText>
      </Row>
      <Space width={1} />
      <User onClick={() => setOpen('user', true)}>{author}</User>
    </CardMetaWrap>
  )
}

export default observer(CardMeta)
