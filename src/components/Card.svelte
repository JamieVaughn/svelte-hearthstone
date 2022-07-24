<script lang="ts">
	import { onMount } from 'svelte';

	import { fade } from 'svelte/transition';
	import type { CardType } from '../../types/Card';
	import { cardback } from '../data/info';
	export let card: CardType;
	export let width = 100;
	export let autoload: boolean = false;
	// export const handler = (e: any) => {
	// 	e.target.src = e.target.dataset.src;
	// };
	// on:load={handler}
	let image: HTMLImageElement;
	let loaded: boolean = false;
	const buffer = 1.5;
	onMount(() => {
		if ((image && window.scrollY + window.innerHeight > image.offsetTop) || autoload) {
			image.src = image?.dataset.src || '';
			loaded = true;
			console.log(image.alt);
		}
		window.addEventListener('scroll', () => {
			if (!loaded && image && window.scrollY + window.innerHeight * buffer > image.offsetTop) {
				image.src = image?.dataset.src || '';
				loaded = true;
				console.log({
					img: image.alt,
					imgPos: image.offsetTop,
					scroll: window.scrollY + window.innerHeight * buffer,
					didLoad: window.scrollY + window.innerHeight * buffer > image.offsetTop
				});
			}
		});
	});
</script>

<a href={`/card/${card.cardId}`} transition:fade>
	<picture transition:fade>
		<img
			bind:this={image}
			src={cardback.imgAnimated}
			data-src={card.img}
			alt={card.name}
			{width}
			loading="lazy"
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
