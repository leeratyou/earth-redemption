import type { Dict, ID, StringOrNumber } from 'types'

export const CardType = {
  Unit: 'unit',
  Event: 'event',
  Attachment: 'attachment',
  Location: 'location',
  Agenda: 'agenda',
  Asset: 'asset',
  Special: 'special'
} as const
export type ICardType = typeof CardType
export type ICardTypeValue = ICardType[keyof ICardType]

export const ArmyType = {
  Alliance: 'alliance',
  Machine: 'machine',
  Cult: 'cult',
  Treat: 'treat',
  Neutral: 'neutral',
} as const
export type IArmyType = typeof ArmyType
export type IArmyTypeValue = IArmyType[keyof IArmyType]

export const CardStatus = {
  Approved: 'approved',
  Pending: 'pending',
  Banned: 'banned',
} as const
export type ICardStatus = typeof CardStatus
export type ICardStatusValue = ICardStatus[keyof ICardStatus]

export const CostColors = {
  materials: '#be3131',
  energy: '#314ea4',
  manpower: '#478831',
  any: '#808080'
} as const
export type ICostColors = typeof CostColors
export type ICostColorsValue = ICostColors[keyof ICostColors]

export const ArmyColors: Dict = {
  r: '#be3131',
  b: '#314ea4',
  g: '#5cac3f'
} as const

export interface ICard {
  _id: ID
  version?: number
  data: {
    army: IArmyTypeValue
    name: string
    type: ICardTypeValue
    cost: { materials: number, manpower: number, energy: number, any: number }
    traits: string[]
    img: string
    description?: string
    unique: boolean
    command?: number
    attack?: number
    hp?: number
  }
  meta: {
    status: ICardStatusValue
    tags: string[]
    author: string,
    rating?: number
  }
}

export type ICardData = ICard['data']
export type ICardMeta = ICard['meta']

export type ICardProp = keyof ICard
