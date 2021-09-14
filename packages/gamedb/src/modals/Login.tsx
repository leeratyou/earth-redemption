import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'

import { useStore } from 'store'
import { Button, Dialog, DialogContent, DialogTitle } from '@material-ui/core'
import { Center, Space } from 'ui'
import google from 'assets/g_icon.svg'

interface Props {

}

const Login: FC<Props> = () => {
  
  const { modalsStore: { isOpen: { login }, setOpen }, userStore: { signInWithGoogle, isAuth } } = useStore()
  
  useEffect(() => {
    if (isAuth) setOpen('login', false)
  }, [ isAuth ])
  
  if (!login) return null
  
  return (
    <Dialog open={login} onClose={() => setOpen('login', false)}>
      <DialogTitle>Log in</DialogTitle>
      <DialogContent>
        <Button onClick={signInWithGoogle} variant='contained'><img src={google} alt='' width={24} /><Space width={0.5} />Login with google</Button>
        <Space />
      </DialogContent>
    </Dialog>
  )
}

export default observer(Login)
