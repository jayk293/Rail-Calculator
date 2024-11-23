<script>
	import App from '$lib/App.svelte';
</script>

<main>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/svelte-material-ui@7.0.0/bare.min.css"
	/>

	<h1>Ali Grice's Rail Calculator</h1>
	<div class="example">
		<App />	
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
