import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { Row, Space } from 'ui'
import { Path } from 'pages/Routes'
import { useStore } from 'store'
import { Button } from '@material-ui/core'

interface Props {

}

const SLink = styled(Link)`
  margin: 1rem;
`

const Logo = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 1rem;
`

const AppbarWrap = styled(Row)`
  padding: 0 1rem;
`

const Appbar: FC<Props> = () => {
  
  const { userStore: { isAuth, user }, modalsStore: { setOpen } } = useStore()
  
  return (
    <AppbarWrap justify='start'>
      <Logo>Earth: Redemption</Logo>
      <SLink to={Path.Home}>Home</SLink>
      <SLink to={Path.Rules}>Rules</SLink>
      <SLink to={Path.Cards}>Cards</SLink>
      <SLink to={Path.Builder}>Builder</SLink>
      <Space grow />
      {isAuth
      ? <SLink to={Path.Profile}>{user?.displayName}</SLink>
      : <Button onClick={() => setOpen('login', true)}>Sign in</Button>}
    </AppbarWrap>
  )
}

export default observer(Appbar)
