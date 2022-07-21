<script lang="ts">
	import type { Card } from '../../types/Card';
	export let card: Card;
</script>

<picture>
	<img src={card.img} alt={card.name} width="200" loading="lazy" />
	<p>{card.name}</p>
</picture>

<style>
	p {
		text-align: center;
		margin-top: 0;
	}
</style>
