<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { appendToActiveDeck } from '../stores/hearthstore';
	import { fade } from 'svelte/transition';
	import type { CardType } from '../../types/Card';
	import { cardback } from '../data/info';
	import { dataset_dev } from 'svelte/internal';

	export let card: CardType;
	export let width = 100;
	export let autoload: boolean = false;
	export let controls: boolean = false;
	export let loaded: boolean = false;

	let image: HTMLImageElement;
	const buffer = 1.5;

	let scrollLoader: undefined | ((e: Event) => void);

	onMount(() => {
		if (!image) return;
		if (
			autoload ||
			window.innerHeight - document.documentElement.scrollHeight < 10 ||
			window.scrollY + window.innerHeight > image.offsetTop
		) {
			loaded = true;
			return;
		}
		scrollLoader = (_) => {
			if (!loaded && image && window.scrollY + window.innerHeight * buffer > image.offsetTop) {
				loaded = true;
			}
		};
		document.addEventListener('scroll', scrollLoader);
	});

	onDestroy(() => {
		if (scrollLoader) document.removeEventListener('scroll', scrollLoader);
	});
</script>

<div transition:fade>
	<a href={`/card/${card.cardId}`}>
		<picture>
			<img
				bind:this={image}
				src={loaded ? image.dataset.src : cardback.imgAnimated}
				data-src={card.img}
				alt={card.name}
				{width}
				loading="lazy"
			/>
		</picture>
	</a>
	<p>
		{card.name}
		{#if controls}
			<button
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold px-1.5 rounded"
				on:click={() => appendToActiveDeck(card)}>+</button
			>
		{/if}
	</p>
</div>

<style>
	p {
		text-align: center;
		margin-top: 0;
	}
	img {
		transition: all 200ms;
		margin: 0 auto;
		min-height: 138px;
		position: relative;
	}
	img:hover {
		transform: scale(1.05) translateY(-8px);
	}
</style>
