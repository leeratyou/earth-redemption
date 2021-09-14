import React, { FC } from 'react'
import styled from 'styled-components'

import Login from './Login'
import AddCard from 'modals/AddCard'
import EditCard from 'modals/EditCard'
import ViewCard from 'modals/ViewCard'

interface Props {

}

const Modals: FC<Props> = () => {
  return (
    <>
      <Login />
      <AddCard />
      <EditCard />
      <ViewCard />
    </>
  )
}

export default Modals
