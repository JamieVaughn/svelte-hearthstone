<script lang="ts">
	import { hearthstore, path, value, attr } from '../stores/hearthstore';
	import { url, options } from '../utils/api';
	import Card from '../components/card.svelte';
	import { info } from '../data/info';
	import type { CardType } from '../../types/Card';
	import { onMount } from 'svelte';

	let status: number = -1;

	const paths = ['classes', 'races', 'sets', 'types', 'factions', 'qualities'];
	const attributes = ['name', 'cost', 'attack', 'health', 'faction', 'type', 'rarity'];
	const fetchCards = async (arg: string) => {
		status = -1;
		const response = await fetch(url({ path: $path, value: arg }), options);
		console.log(response, 'url', url({ path: $path, value: arg }));
		try {
			const json = await response.json();
			const cards = await json.filter((c: CardType) => c?.img);
			console.log(json.length, cards.length, cards);
			hearthstore.set(cards);
			return json;
		} catch (err) {
			console.log('err', err);
			status = response.status;
			return;
		} finally {
			status = response.status;
		}
	};

	onMount(() => {
		fetchCards($value);
	});

	$: {
		if ($value) {
			hearthstore.set([]);
			fetchCards($value);
			search = '';
		}
	}

	let search = '';
	let searchIsNumber: boolean = false;
	let filteredCards: CardType[] = [];

	$: {
		searchIsNumber = ['cost', 'attack', 'health'].includes($attr);
		if (search) {
			filteredCards = $hearthstore.filter((card: CardType) => {
				if ($attr in card && typeof $attr === 'string') {
					if (searchIsNumber) {
						return card[$attr] == search;
					} else {
						return (card[$attr] as string)?.toLowerCase().includes(search.toLowerCase());
					}
				}
			});
		} else {
			filteredCards = [...$hearthstore];
		}
	}
</script>

<svelte:head>
	<title>Heathstone Card Viewer</title>
</svelte:head>
<div class="container">
	<h1>Search Cards</h1>
	<div class="find-cards">
		<label for="path">Select a category & option</label>
		<select name="path" id="path" bind:value={$path}>
			<option value="">Select Option</option>
			{#each paths as p}
				<option value={p}>{p}</option>
			{/each}
		</select>
		<select name="value" id="value" bind:value={$value}>
			<option value="">Select Option</option>
			{#each info[$path] as opt}
				<option value={opt}>{opt}</option>
			{/each}
		</select>
		<label for="attribute">Filter by attribute</label>
		<select name="attribute" id="attribue" bind:value={$attr}>
			{#each attributes as attr}
				<option value={attr}>{attr}</option>
			{/each}
		</select>
		<input
			type="text"
			placeholder="Search Cards"
			max={searchIsNumber ? 2 : ''}
			bind:value={search}
		/>
	</div>
	<article>
		{#if status === -1}
			<div class="msg"><img src="/loading.svg" alt="loading spinner" /></div>
		{:else if status >= 300}
			<div class="msg">Error Loading Cards.</div>
		{:else if status < 300 && !filteredCards.length}
			<div class="msg">No Cards Found</div>
		{:else}
			{#each filteredCards as card (card.cardId)}
				<Card {card} controls />
			{/each}
		{/if}
	</article>
</div>

<style>
	h1 {
		font-size: 1.5rem;
		text-align: center;
		margin: 2rem auto 1rem;
		text-transform: uppercase;
	}
	.find-cards {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4px;
	}
	.find-cards label {
		text-align: center;
		grid-column: 1 / span 2;
	}
	input,
	select {
		width: 100%;
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 8px;
		margin: 8px;
		text-align: center;
		text-transform: capitalize;
	}
	article {
		display: grid;
		justify-items: center;
		align-items: center;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 4px;
	}
	.container {
		padding: 2rem;
	}
	.msg {
		grid-column: 1 / -1;
		font-size: 3rem;
	}
</style>
