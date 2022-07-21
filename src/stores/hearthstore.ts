import { writable } from "svelte/store";

export const hearthstore = writable([]);

type config = {
  id: string
  path: string
}

const url = ({id, path}: config): string => `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${path}/${id}`

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  }
};

const fetchCards = async () => {
  if(hearthstore.length) return
  const response = await fetch(url({id: 'Murloc', path: 'races'}), options);
  const json = await response.json();
  const cards = json.filter(c => c?.img)
  console.log(json.length, cards.length, cards)
  hearthstore.set(cards);
  return json;
}

fetchCards()
