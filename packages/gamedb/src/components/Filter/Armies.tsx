import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'

import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab'


import { ArmyType } from 'types/ICard'
import { useStore } from 'store'

interface Props {

}

const Button = styled(ToggleButton)`
  width: 2.5rem;
`

const Armies: FC<Props> = observer(() => {
  
  const { cardsStore: { setFilter, filters } } = useStore()
  
  const onChange = (event: any, newActive: any) => setFilter('army', event.shiftKey ? [ event.target.value ] : newActive)
  
  return (
    <div>
      Army
      <div>
        <ToggleButtonGroup value={filters.army} onChange={onChange}>
          {Object.entries(ArmyType).map(([key, value]) => (
            <Button key={key} value={value} title={key}>{key.substring(0,2)}</Button>
          ))}
        </ToggleButtonGroup>
      </div>
    </div>
  )
})

export default Armies
