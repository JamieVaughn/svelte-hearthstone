<script lang="ts">
	import { hearthstore } from '../stores/hearthstore';
	import Card from '../components/card.svelte';
	import { info } from '../data/info';
	import type { CardType } from '../../types/Card';
	import { onMount } from 'svelte';

	const paths = ['races', 'classes', 'sets', 'types', 'factions', 'qualities'];
	let path = 'races';
	let option = 'Murloc';

	type config = {
		option: string;
		path: string;
	};

	const url = ({ option, path }: config): string =>
		`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${path}/${option}`;

	export const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
			'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
		}
	};

	let error = null;

	const fetchCards = async (arg: string) => {
		// if (hearthstore) return hearthstore;
		error = null;
		console.log('url', url({ option: arg, path: path }));
		const response = await fetch(url({ option: arg, path: path }), options);
		console.log(response);
		if (!response.ok) error = response.status;
		const json = await response.json();
		const cards: CardType[] = json.filter((c: CardType) => c?.img);
		console.log(json.length, cards.length, cards);
		hearthstore.set(cards);
		return json;
	};

	onMount(() => {
		fetchCards(option);
	});

	$: {
		if (option) {
			hearthstore.set([]);
			fetchCards(option);
		}
	}

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
</script>

<svelte:head>
	<title>Heathstone Viewer</title>
</svelte:head>
<h1>SvelteKit Hearthstone Viewer</h1>
<select name="path" id="path" bind:value={path}>
	<option value="">Select Option</option>
	{#each paths as p}
		<option value={p}>{p}</option>
	{/each}
</select>
<select name="option" id="option" bind:value={option}>
	<option value="">Select Option</option>
	{#each info[path] as option}
		<option value={option}>{option}</option>
	{/each}
</select>
<input type="text" placeholder="Search Cards" bind:value={search} />
<main>
	{#if error}
		<div>Error Loading Cards.</div>
	{:else if !filteredCards.length}
		<div>Loading...</div>
	{/if}
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
	div {
		grid-column: 1 / -1;
		font-size: 3rem;
	}
</style>
