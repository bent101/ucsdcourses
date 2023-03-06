<script lang="ts">
	import OnThisPage from "$lib/OnThisPage.svelte";
	import DeptHeader from "./DeptHeader.svelte";
</script>

<DeptHeader />

<div class="m-auto flex max-w-7xl gap-4 px-4">
	<div class="flex-1">
		<slot />
	</div>
	<div class="hidden w-72 lg:block">
		<OnThisPage />
	</div>
</div>

<style lang="postcss">
	div :global(h2) {
		@apply mt-8 scroll-mt-20 text-3xl font-extrabold tracking-wide text-gray-400;
	}
	div :global(h3) {
		@apply mt-6 scroll-mt-20 text-2xl font-extrabold uppercase tracking-wide text-gray-500;
	}
	div :global(h4) {
		@apply mt-4 scroll-mt-20 text-lg font-extrabold uppercase tracking-wide text-gray-500;
	}
	div :global(.note) {
		@apply mt-4 border-l-2 border-sky-700 bg-sky-900/30 p-4 text-sky-300;
	}
</style>
