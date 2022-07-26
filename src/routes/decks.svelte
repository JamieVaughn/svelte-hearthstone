<script lang="ts">
	import { onMount } from 'svelte';
	import Card from '../components/card.svelte';
	import { activeDeck, decks, switchDeck } from '../stores/hearthstore';
	import type { Deck } from '../stores/hearthstore';
	import { url, options } from '../utils/api';
	import type { CardType } from '../../types/Card';

	export let cards: CardType[] = [];
	const deck: Deck = $decks.find((deck) => deck.name === $activeDeck);
	onMount(async () => {
		Promise.all(
			deck?.cards?.map(async (card) => {
				const response = await fetch(url({ path: card, value: '' }), options);
				const json = await response.json();
				return json[0];
			})
		).then((data) => {
			console.log(data);
			cards = data; // have to set the prop using = instead of .push() for reactivity
		});
	});

	const changeDeck = (event: InputEvent) => {
		if (event?.target?.value) switchDeck(event.target.value);
	};
	$: {
		if ($activeDeck) {
			Promise.all(
				deck?.cards?.map(async (card) => {
					const response = await fetch(url({ path: card, value: '' }), options);
					const json = await response.json();
					return json[0];
				})
			).then((data) => {
				console.log(data);
				cards = data; // have to set the prop using = instead of .push() for reactivity
			});
		}
	}
</script>

<div class="container">
	<h1>Your Deck:</h1>
	<select name="deck" id="deck" bind:value={$activeDeck} on:input={changeDeck}>
		{#each $decks as deck}
			<option selected={deck.name === $activeDeck ? true : false} value={deck.name}>
				{deck.name}
			</option>
		{/each}
	</select>
	<article>
		{#each cards as card}
			<Card {card} />
		{/each}
	</article>
</div>

<style>
	h1 {
		font-size: 1.5rem;
		text-align: center;
		margin: 2rem auto 1rem;
		text-transform: uppercase;
	}
	select {
		margin: 0 auto;
		display: block;
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
</style>
