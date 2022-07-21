<script lang="ts">
	import { hearthstore } from '../stores/hearthstore';
	import Card from '../components/card.svelte';
	import { info } from '../data/info';
	import type { Card as CardType } from '../types/Card';
	import { onMount } from 'svelte';

	let race = 'Murloc';

	type config = {
		id: string;
		path: string;
	};

	const url = ({ id, path }: config): string =>
		`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${path}/${id}`;

	export const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
			'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
		}
	};

	const fetchCards = async () => {
		if (hearthstore.length) return;
		const response = await fetch(url({ id: race, path: 'races' }), options);
		const json = await response.json();
		const cards = json.filter((c: Card) => c?.img);
		console.log(json.length, cards.length, cards);
		hearthstore.set(cards as unknown as Card);
		return json;
	};

	onMount(() => {
		fetchCards();
	});

	console.log($hearthstore);

	let search = '';
	let filteredCards: Card[] = [];

	$: {
		if (search) {
			filteredCards = $hearthstore.filter((card: CardType) =>
				card.name.toLowerCase().includes(search.toLowerCase())
			);
		} else {
			filteredCards = [...$hearthstore];
		}
	}

	$: {
		if (race) fetchCards();
	}
</script>

<svelte:head>
	<title>Heathstone Viewer</title>
</svelte:head>
<h1>SvelteKit Hearthstone Viewer</h1>
<select name="race" id="race" bind:value={race}>
	{#each info.races as race}
		<option value={race}>{race}</option>
	{/each}
</select>
<input type="text" placeholder="Search Cards" bind:value={search} />
<main>
	{#each filteredCards as card}
		<Card {card} />
	{/each}
</main>

<style>
	h1 {
		font-size: 3rem;
		text-align: center;
		margin: 8px auto;
		text-transform: uppercase;
	}
	input,
	select {
		width: 100%;
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 8px;
		margin: 8px;
		text-align: center;
	}
	main {
		display: grid;
		justify-items: center;
		align-items: center;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 4px;
	}
</style>
