import React, { FC } from 'react'
import styled from 'styled-components'
import { ICard } from 'types/ICard'

import Card, { CardHover, CardMeta } from 'components/Card'

interface Props {
  card: ICard
}

const StyledCardWrap = styled.div`
  padding: 0.5rem;
`

const Sss = styled.div`
  position: relative;
  :hover {
    .cardHover {
      display: flex;
    }
  }
`

const CardsWrap: FC<Props> = ({ card }) => {
  return (
    <StyledCardWrap>
      <Sss>
        <Card {...card} />
        <CardHover {...card} />
      </Sss>
      <CardMeta {...card} />
    </StyledCardWrap>
  )
}

export default CardsWrap
