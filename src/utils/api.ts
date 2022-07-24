// https://rapidapi.com/omgvamp/api/hearthstone/
// 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks',

type config = {
  value: string;
  path: string;
};

export const url = ({ value, path }: config): string =>
  `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${path}/${value}`;

export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  }
};
