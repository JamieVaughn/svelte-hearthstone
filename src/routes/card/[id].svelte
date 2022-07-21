<script context="module">
	import options from '../index.svelte';
	/** @type {import('./__types/[slug]').Load} */
	export async function load({ params, session, fetch }) {
		console.log(params);
		const response = await fetch(
			`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${params.name}`,
			options
		);
		const card = await response.json();
		return { status: response.status, props: { card: response.ok && card } };
	}
</script>

<script>
	export let card;
</script>

<h1>{card?.name}</h1>
