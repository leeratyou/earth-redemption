import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'

import { useStore } from 'store'
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core'

import { IModals } from 'store/modals'
import { Space } from 'ui'

interface Props {
  name: keyof IModals,
  title?: string,
  fullWidth?: boolean,
  onClose?: () => void
}

const Modal: FC<Props> = ({ name, title, children, onClose, ...rest }) => {
  
  const { modalsStore: { isOpen , setOpen }} = useStore()
  
  if (!isOpen[name]) return null
  
  const close = () => {
    if (onClose) onClose()
    setOpen(name, false)
  }
  
  return (
    <Dialog open={isOpen[name]} onClose={close} fullWidth {...rest}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        {children}
        <Space />
      </DialogContent>
    </Dialog>
  )
}

export default observer(Modal)
