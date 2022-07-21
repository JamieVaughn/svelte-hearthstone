<script lang="ts">
	import type { Card } from '../../types/Card';
	export let card: Card;
</script>

<a href={`/card/${card.name}`}>
	<picture>
		<img src={card.img} alt={card.name} width="200" loading="lazy" />
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
	}
	img:hover {
		transform: scale(1.05) translateY(-8px);
	}
</style>
