import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'

import Modal from 'modals/Modal'
import { CardForm } from 'components/CardForm'
import { useStore } from 'store'
import { ICard } from 'types/ICard'

interface Props {

}

const AddCard: FC<Props> = () => {
  
  const { cardsStore: { addCard }, modalsStore: { setOpen } } = useStore()
  
  const handleSubmit = (card: Omit<ICard, '_id'>) => {
    addCard(card)
  }
  
  return (
    <Modal name='addCard' title='Add Card' fullWidth>
      <CardForm onSubmit={handleSubmit} onClose={() => setOpen('addCard', false)} />
    </Modal>
  )
}

export default observer(AddCard)
