import React, { FC } from 'react'
import styled from 'styled-components'

import { Paper, Container } from '@material-ui/core'

import { Text } from 'ui'

interface Props {}

const Wrap = styled.div`
  padding: 1rem;
`

const Home: FC<Props> = () => {
  return (
    <Container>
      <Paper>
        <Wrap>
          <Text paragraph><b>Earth: Redemption</b> is community driven card game based on <i>Simple Action System</i>.</Text>
          <Text paragraph>Members of community can create and rate cards, construct and print decks.</Text>
        </Wrap>
      </Paper>
    </Container>
  )
}

export default Home
