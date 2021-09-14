import React, { FC } from 'react'
import styled from 'styled-components'

import Appbar from './Appbar'


interface Props {

}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Appbar />
      {children}
    </div>
  )
}

export default Layout
