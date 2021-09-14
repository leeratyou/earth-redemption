import React, { FC } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'

import { IconButton, InputBase, Paper } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import Clear from '@material-ui/icons/Clear'
import { useStore } from 'store'

interface Props {

}

const Input = styled(InputBase)`
  margin-left: 1rem;
`

const Search: FC<Props> = () => {
  
  const { cardsStore: { setFilter, filters }} = useStore()
  
  const search = (e: any) => setFilter('query', e.target.value)
  const clear = () => setFilter('query', '')
  
  return (
    <div>
      Search
      <Paper>
        <Input value={filters.query} placeholder="e.g. name or trait" onChange={search} />
        <IconButton onClick={clear}>
          {filters.query ? <Clear /> : <SearchIcon />}
        </IconButton>
      </Paper>
    </div>
  )
}

export default observer(Search)
