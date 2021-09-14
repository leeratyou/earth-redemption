import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

import { Button } from '@material-ui/core'
import { useStore } from 'store'
import { Path } from 'pages/Routes'

interface Props {

}

const Profile: FC<Props> = () => {
  
  const { userStore: { logout, isAuth } } = useStore()
  
  if (!isAuth) return <Redirect to={Path.Home} />
  
  return (
    <div>
      <Button onClick={logout} variant='contained'>Logout</Button>
    </div>
  )
}

export default observer(Profile)
