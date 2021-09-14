import React, { FC } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'

import { Fab } from '@material-ui/core'
import Edit from '@material-ui/icons/Edit'
import Visibility from '@material-ui/icons/Visibility'
import Rating from '@material-ui/lab/Rating'
import { useStore } from 'store'
import { ID } from 'types'
import { Center, Row, Space } from 'ui'
import { ICard } from 'types/ICard'

const CardHoverContainer = styled.div`
  position: absolute;
  inset: 0;
  background-color:rgba(0,0,0,0.2);
  border-radius: 8px;
  display: none;
  backdrop-filter:blur(2px);
  justify-content: center;
  align-items: center;
`

const EditFab = styled(Fab)`
  //position: absolute !important;
  //bottom: 1rem;
  //left: 1rem;
`

const VisibilityFab = styled(Fab)`
  //position: absolute !important;
  //top: 50%;
  //left: 50%;
  //transform: translate(-50%, -50%);
`

const RatingWrap = styled(Center)`
  padding: 0.5rem;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 8px;
`

interface Props {}

const CardHover: FC<Props & ICard> = ({ _id, meta: { author } }) => {
  
  const {
    userStore: { userId, isAdmin, isAuth },
    modalsStore: { setOpen },
    cardsStore: { setCurrent, rate }
  } = useStore()
  
  const isEditable = isAdmin || author === userId
  
  const view = () => {
    setCurrent(_id)
    setOpen('viewCard', true)
  }
  
  const edit = () => {
    setCurrent(_id)
    setOpen('editCard', true)
  }
  
  const handleRate = (_: any, value: number | null) => rate(userId!, _id, value)
  
  return (
    <CardHoverContainer className={'cardHover'}>
      <Center>
        <Row>
          <VisibilityFab color='primary' onClick={view}>
            <Visibility />
          </VisibilityFab>
          {isEditable && (
            <>
              <Space width={1} />
              <EditFab color='secondary' onClick={edit}>
                <Edit />
              </EditFab>
            </>
          )}
        </Row>
        <Space height={2} />
        <RatingWrap>
          {!isAuth && <div>You can rate it after log in</div>}
          <Rating onChange={handleRate} disabled={!isAuth} />
        </RatingWrap>
      </Center>
    </CardHoverContainer>
  )
}

export default observer(CardHover)
