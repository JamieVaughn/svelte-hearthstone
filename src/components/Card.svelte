<script lang="ts">
	import { onMount } from 'svelte';

	import { fade } from 'svelte/transition';
	import type { CardType } from '../../types/Card';
	export let card: CardType;
	export let width = 100;
	export const handler = (e: any) => {
		e.target.src = e.target.dataset.src;
	};
	let image;
	onMount(() => {
		window.addEventListener('scroll', (e) => {
			console.log(e.target.scrollingElement.scrollHeight, image.pageYOffset);
		});
	});
</script>

<a href={`/card/${card.cardId}`} transition:fade>
	<picture transition:fade>
		<img
			bind:this={image}
			src="/loading.svg"
			data-src={card.img}
			alt={card.name}
			{width}
			loading="lazy"
			on:load={handler}
		/>
		<p>{card.name}</p>
	</picture>
</a>

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
