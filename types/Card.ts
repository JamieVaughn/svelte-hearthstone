export interface CardType {
  [keyof: string]: undefined | string | number | boolean | Array<{name: string}>,
  Artist?: string
  attack?: number
  cardId: string
  dbfId: string
  cardSet: string
  cost: number
  collectible: boolean
  faction: string
  health?: number
  img: string
  locale: string
  name: string
  playerClass: string
  race: string
  rarity: string
  text?: string
  flavor?: string
  mechanics?: Array<{name: string}>
  type: string
}
