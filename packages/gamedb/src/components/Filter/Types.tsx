import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab'
import { ArmyType, CardType, ICardProp } from 'types/ICard'
import { useStore } from 'store'

interface Props {

}

const Button = styled(ToggleButton)`
  width: 2.5rem;
`

const Types: FC<Props> = observer(() => {
  const { cardsStore: { setFilter, filters } } = useStore()
  
  const onChange = (event: any, newActive: any) => setFilter('type', event.shiftKey ? [ event.target.value ] : newActive)
  
  return (
    <div>
      Type
      <div>
        <ToggleButtonGroup value={filters.type} onChange={onChange}>
          {Object.entries(CardType).map(([key, value]) => (
            <Button key={key} value={value} title={key}>{key.substring(0,2)}</Button>
          ))}
        </ToggleButtonGroup>
      </div>
    </div>
  )
})

export default Types
