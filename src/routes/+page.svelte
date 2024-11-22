<script>
	import Counter from '$lib/App.svelte';
</script>

<main>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/svelte-material-ui@7.0.0/bare.min.css"
	/>

	<h1> Ali Grice's Big Head</h1>
	<div class="example">
		<Counter />	
	</div>
</main>

<style>
	main {
		max-width: 600px;
		margin: 0 auto;
		padding: 1em;
	}

	.example {
		border: 1px solid #ccc;
		padding: 1em;
		margin: 1em 0;
	}

	.purple {
		color: purple;
		font-weight: bold;
	}
</style>
