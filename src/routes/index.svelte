<script>
	// https://sveltematerialui.com/
</script>

<svelte:head>
	<title>Home Page</title>
</svelte:head>

<h1>Hearthstone Deck Builder</h1>
<article>
	<p>This is an app to view Hearthstone card information and create and save a Hearthstone deck</p>
	<a href="/cards">Go to Card Viewer →</a>
</article>
<footer>
	<p>There's a couple of Sveltekit demo api routes here:</p>
	<ol>
		<li><a href="/api/cards">Rand</a></li>
		<li><a href="/api/cards/100">Rand*100</a></li>
	</ol>
</footer>

<style>
	article {
		height: 60vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	article > * {
		padding: 1rem;
	}
	h1 {
		font-size: 3rem;
		text-align: center;
		margin: 8px auto;
		text-transform: uppercase;
	}
	a {
		text-decoration: underline;
		color: dodgerblue;
	}
	a:visited {
		color: rebeccapurple;
	}
	footer {
		padding: 2rem;
	}
</style>
