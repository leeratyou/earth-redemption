import React, { FC } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'

import { Button } from '@material-ui/core'
import Card from 'components/Card'
import Filter from 'components/Filter'
import { Row, Space } from 'ui'
import { useStore } from 'store'

import CardsWrap from './CardsWrap'

interface Props {

}

const CardsContainer = styled.div`
  padding: 0.5rem 1rem 1rem 1rem;
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Cards: FC<Props> = () => {
  
  const {
    cardsStore: { filteredCards },
    userStore: { isAuth },
    modalsStore: { setOpen }
  } = useStore()
  
  return (
    <CardsContainer>
      <Row>
        <Filter />
        <Space grow />
      </Row>
      <Space />
      <Row justify='start'>
        {!isAuth && <span>Available after you Log In</span>}
        <Space width={1} />
        <Button disabled={!isAuth} variant='contained' color='secondary' onClick={() => setOpen('addCard', true)}>Add card</Button>
      </Row>
      <Space />
      <Content>
        {filteredCards.map((card) => <CardsWrap key={card._id} card={card} />)}
      </Content>
    </CardsContainer>
  )
}

export default observer(Cards)
