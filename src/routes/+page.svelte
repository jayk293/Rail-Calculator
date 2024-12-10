<script>
	import App from "$lib/App.svelte";
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
	} from "flowbite-svelte";
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<img
			src="https://static.wixstatic.com/media/5bed0d_1396d5588fc34805bf78a10e6e4ffee1~mv2.png/v1/fill/w_66,h_66,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5bed0d_1396d5588fc34805bf78a10e6e4ffee1~mv2.png"
			class="mr-3 h-6 sm:h-9"
			alt="Flowbite Logo"
		/>
		<span
			class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
		>
			The PWay Engineer
		</span>
	</NavBrand>
</Navbar>

<main>
	<div class="app">
		<App />
	</div>
</main>

<style lang="postcss">
	main {
		max-width: 1024px;

		margin: 0 auto;
		padding: 1em 1em;
	}

	.app {
		padding: 1em;
		margin: 1em 0;
	}
</style>
