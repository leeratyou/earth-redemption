import React, { FC } from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Builder from 'pages/Builder'
import Cards from 'pages/Cards/Cards'
import Home from 'pages/Home'
import Login from 'pages/Login'
import Profile from 'pages/Profile'

interface Props {

}

export const Path = {
  Home: '/home',
  Rules: '/rules',
  Builder: '/builder',
  Cards: '/cards',
  Login: '/login',
  Profile: '/profile'
} as const

const Routes: FC<Props> = () => {
  return (
    <Switch>
      <Route path={Path.Home} component={Home} />
      <Route path={Path.Rules} component={Home} />
      <Route path={Path.Builder} component={Builder} />
      <Route path={Path.Cards} component={Cards} />
      <Route path={Path.Login} component={Login} />
      <Route path={Path.Profile} component={Profile} />
      <Redirect to={Path.Home} />
    </Switch>
  )
}

export default Routes
