import { writable } from "svelte/store";

export const hearthstore = writable([]);

export const path = writable<string>('classes');
export const value = writable<string>('Hunter'); // capitalize to match data for first paint
export const attr = writable<string>('name');
export const activeDeck = writable<{name: string, cards: string[]}>({name: 'temp', cards: ['PVPDR_Hero_Slate', 'VAN_EX1_554t', 'OG_070', 'GVG_093']});

export const decks = writable({})
