import React, { FC } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { Redirect } from 'react-router-dom'

import { Button, Paper } from '@material-ui/core'

import { useStore }from 'store'
import { Path } from 'pages/Routes'

import google from 'assets/g_icon.svg'
import { Center, Space } from 'ui'

interface Props {

}

const Wrap = styled(Paper)`
  padding: 2rem;
`

const Login: FC<Props> = () => {
  
  const { userStore: { signInWithGoogle, isAuth }} = useStore()
  
  if (isAuth) return <Redirect to={Path.Home} />
  
  return (
    <Center>
      <Wrap>
        <Center>
          Log in
          <Space />
          <Center>
            <Button onClick={signInWithGoogle} variant='contained'><img src={google} alt='' width={24} /><Space width={0.5} />Login with google</Button>
          </Center>
        </Center>
      </Wrap>
    </Center>
  )
}

export default observer(Login)
