import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'

import Modal from 'modals/Modal'
import { CardForm } from 'components/CardForm'
import { useStore } from 'store'
import { ICard } from 'types/ICard'

interface Props {

}

const EditCard: FC<Props> = () => {
  
  const { cardsStore: { current, setCurrent, updateCard }, modalsStore: { setOpen } } = useStore()
  
  const handleSubmit = (card: ICard) => {
    updateCard(card)
    setOpen('editCard', false)
  }
  
  const handleClose = () => {
    setCurrent(null)
    setOpen('editCard', false)
  }
  
  return (
    <Modal name='editCard' title='Edit Card' fullWidth>
      <CardForm card={current} onClose={handleClose} onSubmit={handleSubmit} />
    </Modal>
  )
}

export default observer(EditCard)
