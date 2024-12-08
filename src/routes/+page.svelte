<script>
	import App from "$lib/App.svelte";
</script>

<main>
	<h1 class="title">Ali Grice's Rail Calculator</h1>
	<div class="example">
		<App />
	</div>
</main>

<style lang="postcss">
	main {
		max-width: 600px;
		margin: 0 auto;
		padding: 1em;
	}

	.title {
		text-align: center;
		color: #333;
		font-size: 2.5em;
		margin-bottom: 1em;
		border-bottom: 2px solid #007bff;
		padding-bottom: 0.5em;
	}

	.example {
		border: 1px solid #ccc;
		padding: 1em;
		margin: 1em 0;
	}
</style>
