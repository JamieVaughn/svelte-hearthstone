<script>
	import { cardback } from '../data/info';
	import { activeDeck } from '../stores/hearthstore';
</script>

<nav class="flex justify-center w-full">
	<a class="logo" href="/"><img src={cardback.img} alt="Hearthstone card back logo" /></a>
	<h1 class="title">Hearthstone Deck Builder</h1>
	<a class="cards" href="/cards">Cards</a>
	<a class="deck" href="/decks">Decks</a>
	<div class="active-deck">Active Deck: {$activeDeck}</div>
</nav>

<style>
	nav {
		background: cornsilk;
		box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.2);
		padding: 0 0 1rem;
		display: grid;
		align-items: center;
		grid-template-columns: 100px 100px 1fr 100px 100px;
		grid-template-areas:
			'logo . title . active-deck'
			'. . . cards deck';
	}
	h1 {
		font-size: 2rem;
		text-align: center;
		margin: 8px auto;
		text-transform: uppercase;
		/* color: white; */
	}
	a {
		margin: 0 auto;
		font-size: 1rem;
		cursor: pointer;
		border: 1px solid silver;
		border-radius: 0.5rem;
		padding: 0 8px;
	}
	a:hover {
		background-color: silver;
	}
	a:first-of-type:hover {
		animation: spin 0.25s forwards;
	}
	a:first-of-type {
		border: none;
		background-color: transparent;
		transition: all 0.25s;
		animation: spinback 0.25s forwards;
	}
	a > img {
		height: 50px;
	}
	.logo {
		grid-area: logo;
	}
	.title {
		grid-area: title;
	}
	.cards {
		grid-area: cards;
	}
	.deck {
		grid-area: deck;
	}
	.active-deck {
		padding: 0 4px;
		text-align: center;
		grid-area: active-deck;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(180deg);
		}
	}
	@keyframes spinback {
		from {
			transform: rotate(180deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
