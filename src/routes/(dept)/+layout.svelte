<script lang="ts">
	import OnThisPage from "$lib/OnThisPage.svelte";
	import DeptHeader from "./DeptHeader.svelte";
</script>

<DeptHeader />

<div class="flex">
	<div class="flex-1 px-4">
		<div class="m-auto max-w-4xl">
			<slot />
		</div>
	</div>
	<div class=" hidden lg:mt-16 lg:ml-4 lg:block lg:w-72">
		<OnThisPage />
	</div>
</div>

<style lang="postcss">
	div :global(h2) {
		@apply mt-8 text-3xl font-extrabold tracking-wide text-gray-400;
	}
	div :global(h3) {
		@apply mt-6 text-2xl font-extrabold uppercase tracking-wide text-gray-500;
	}
	div :global(h4) {
		@apply mt-4 text-lg font-extrabold uppercase tracking-wide text-gray-500;
	}
	div :global(.note) {
		@apply mt-1 border-l-2 border-sky-700 bg-sky-900/30 px-2 py-1 text-sky-300;
	}
</style>
