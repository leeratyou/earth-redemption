import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab'
import { CardType, ICardProp } from 'types/ICard'
import { useStore } from 'store'

interface Props {

}

const Button = styled(ToggleButton)`
  width: 2.5rem;
`

const Status: FC<Props> = observer(() => {
  const { cardsStore: { setFilter, filters } } = useStore()
  
  const onChange = (event: any, newActive: any) => setFilter('status', newActive)
  
  return (
    <div>
      Type
      <div>
        <ToggleButtonGroup value={filters.type} onChange={onChange}>
          <Button value={CardType.Unit}>U</Button>
          <Button value={CardType.Event}>E</Button>
          <Button value={CardType.Attachment}>At</Button>
          <Button value={CardType.Location}>L</Button>
          <Button value={CardType.Agenda}>Ag</Button>
          <Button value={CardType.Special}>S</Button>
        </ToggleButtonGroup>
      </div>
    </div>
  )
})

export default Status
