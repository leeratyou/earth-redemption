import React, { FC } from 'react'
import styled from 'styled-components'

import { Paper, Container } from '@material-ui/core'

import { Space, Text } from 'ui'

interface Props {}

const Wrap = styled.div`
  padding: 1rem;
`

const Rules: FC<Props> = () => {
  return (
    <Container>
      <Paper>
        <Wrap>
          <Text.H4>Rules</Text.H4>
          <Space />
          <Text.H6>Setup</Text.H6>
          <ol>
            <li><Text>Choose <i>Agenda</i> card</Text></li>
            <li><Text>Take all <i>Special</i> cards that listed in chosen Agenda and place them in front of you</Text></li>
            <li><Text>Prepare 5 (7??? 10???) locations in a row</Text></li>
            <li><Text>Randomly choose the first player</Text></li>
          </ol>
          <Text.H6>Game sequence</Text.H6>
          <ol>
            <li><Text>Player takes an <b>action</b></Text></li>
            <li><Text>Starting with opponent players can play <b>reaction</b> one by one</Text></li>
            <li><Text>Resolve effect of the <b>action</b></Text></li>
            <li><Text>Next player takes an <b>action</b></Text></li>
            <li><Text>This lasts until any winning or losing condition is met</Text></li>
          </ol>
          <Space />
          <Text.H6>Simple actions</Text.H6>
          <ol>
            <li>
              <Text><b>Attack</b> action steps sequence</Text>
              <ol>
                <li>Declare attack action</li>
                <li>Declare ready attacker unit you control</li>
                <li>Exhaust it</li>
                <li>Declare defender unit opponent control</li>
                <li>Modify attack step</li>
                <li>Assign damage</li>
              </ol>
            </li>
            <li>
              <Text><b>Deploy unit</b> action steps sequence</Text>
              <ol>
                <li>Declare deploy action</li>
                <li>Declare target location</li>
                <li>Reveal an unit</li>
                <li>Pay its cost</li>
                <li>Place this unit to target location</li>
                <li>Exhaust that unit</li>
              </ol>
            </li>
            <li>
              <Text bold>Move</Text>
              <ol>
                <li>Declare move action</li>
                <li>Declare ready unit to move you control</li>
                <li>Move target unit to adjacent location</li>
                <li>Exhaust that unit</li>
              </ol>
            </li>
            <li>
              <Text bold>Refresh</Text>
              <ol>
                <li>Declare refresh action</li>
                <li>Declare exhausted card you control</li>
                <li>Ready that card</li>
              </ol>
            </li>
            <li>
              <Text bold>Prepare</Text>
              <ol>
                <li>Declare prepare action</li>
                <li>Take a card from top of your deck to your hand</li>
              </ol>
            </li>
          </ol>
          <Space />
        </Wrap>
      </Paper>
    </Container>
  )
}

export default Rules
