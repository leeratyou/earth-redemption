import { makeAutoObservable, toJS } from "mobx";
import type { ICard, ICardData } from 'types/ICard'
import { ArmyType, CardStatus, CardType } from 'types/ICard'

import cards from 'fixtures/cards'
import { ID } from 'types'

type Filters = { query: string, army: any[], type: any[], status: any[] }

function isPassedFilter(card: ICardData, filters: Filters) {
  const isInType = filters.type.includes(card.type)
  const isInArmy = filters.army.includes(card.army)
  const isInQuery = filters.query
    ? card.name.toLowerCase().includes(filters.query.toLowerCase())
    || card.traits.some(trait => trait.toLowerCase().includes(filters.query.toLowerCase()))
    : true
  return isInType && isInArmy && isInQuery
}

class CardsStore {
  
  constructor() {
    makeAutoObservable(this)
  }
  
  cards = cards
  
  filters: Filters  = {
    army: Object.values(ArmyType),
    type: Object.values(CardType),
    status: [CardStatus.Approved],
    query: ''
  }
  
  _current: ID | null = null
  
  get current() {
    return this.filteredCards.find(c => c._id === this._current) as ICard
  }
  
  get filteredCards() {
    return this.cards.filter(card => isPassedFilter(card.data, this.filters))
  }
  
  get traits() {
    // @ts-ignore
    const set = [...(new Set((toJS(this.cards).reduce((arr, curr) => [...arr, ...curr.data.traits], []))))]
    return set
  }
  
  setFilter = (type: keyof Filters, value: any) => this.filters[type] = value
  
  addCard = async (card: Omit<ICard, '_id'>) => {
    this.cards.push({ _id: Date.now(), ...card })
  }
  
  updateCard = async (card: ICard) => {
    const index = this.cards.findIndex(c => c._id === card._id)
    this.cards[index] = card
  }
  
  setCurrent = (_id: ID | null) => this._current = _id
  
  rate = (userId: ID, cardId: ID, rating: number | null) => {
    console.log('--- cards.ts -> rate -> userId:', userId, cardId, rating)
  }
  
  
}

const cardsStore = new CardsStore();
export default cardsStore;
