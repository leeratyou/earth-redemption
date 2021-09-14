import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {

}

const StyledCenter = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Center: FC<Props> = StyledCenter

export default Center
