import { makeAutoObservable } from 'mobx'

export const Modals = {
  addCard: false,
  editCard: false,
  viewCard: false,
  login: false,
  user: false,
}

export type IModals = typeof Modals

class ModalsStore {
  
  constructor() {
    makeAutoObservable(this)
  }
  
  isOpen: IModals = Modals
  
  setOpen = (modal: keyof IModals, state: boolean) => this.isOpen[modal] = state
  
}

const modalsStore = new ModalsStore()
export default modalsStore
