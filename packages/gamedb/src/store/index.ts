import { createContext, useContext } from 'react'

import cardsStore from './cards'
import userStore from './user'
import modalsStore from './modals'
import commentsStore from './comments'

const stores = {
  cardsStore,
  userStore,
  modalsStore,
  commentsStore
}

const cardsContext = createContext(stores)

export function useStore(storeOrStores?: keyof typeof stores | (keyof typeof stores)[]) {
  const stores = useContext(cardsContext)
  // const value = !storeOrStores
  //   ? stores
  //   : Array.isArray(storeOrStores)
  //     ?
  return stores
}
