import { writable } from "svelte/store";
import type { Card } from '../types/Card';

export const hearthstore = writable([]);

export const path = writable('classes');
export const value = writable('Hunter'); // capitalize to match data for first paint

export const activeDeck = writable({name: 'temp', cards: ['PVPDR_Hero_Slate', 'VAN_EX1_554t', 'OG_070', 'GVG_093']});

export const decks = writable({})
