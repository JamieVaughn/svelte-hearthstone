import { writable, get } from "svelte/store";
import type { CardType } from '../../types/Card';

export const hearthstore = writable([]);

export const path = writable<string>('classes');
export const value = writable<string>('Hunter'); // capitalize to match data for first paint
export const attr = writable<string>('name');

export interface Deck {
  name: string
  cards: string[]
}

const starter = {name: 'Starter Deck', cards: ['PVPDR_Hero_Slate', 'VAN_EX1_554t', 'OG_070', 'GVG_093']}
const booster = {name: 'Booster Pack', cards: ['UNG_920t2', 'UNG_915', 'UNG_915']}

export const decks = writable<Deck[]>([starter, booster])
export const activeDeck = writable<string>(starter.name);

export const appendToActiveDeck = (card: CardType) => {
  decks.update(decks => {
    const targetDeck = decks.find(deck => deck.name === get(activeDeck))?.cards.push(card.cardId)
    return decks
  })
};

export const switchDeck = (name: string) => {
  activeDeck.set(name)
}

export const addDeck = (name: string) => {
  decks.update((decks) => {
    return [...decks, {name, cards: []}];
  }); 
}
