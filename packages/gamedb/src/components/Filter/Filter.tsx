import React, { FC } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'

import { Row, Space } from 'ui'

import Search from './Search'
import Armies from './Armies'
import Types from './Types'

interface Props {

}

const FilterWrap = styled(Row)`
`

const Filter: FC<Props> = () => {
  return (
    <FilterWrap justify='start'>
      <Search />
      <Space />
      <Armies />
      <Space />
      <Types />
    </FilterWrap>
  )
}

export default observer(Filter)
