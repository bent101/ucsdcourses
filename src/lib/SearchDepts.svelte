<script lang="ts">
	import { depts } from "$lib/depts.js";
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	let rawQuery = "";
	$: query = rawQuery.trim().toLowerCase();
	$: filtered = $depts.filter(([short, long]) => {
		return short.toLowerCase().includes(query) || long.toLowerCase().includes(query);
	});
	$: sorted = filtered.sort(([short1, long1], [short2, long2]) => {
		return +short2.toLowerCase().includes(query) - +short1.toLowerCase().includes(query);
	});
</script>

<svelte:body
	on:keydown={(e) => {
		console.log(e.key);
		if (e.key === "Escape") {
			dispatch("exit");
		}
	}}
/>

<div class=" absolute inset-8 top-32 z-10 overflow-y-scroll rounded-xl bg-gray-900 text-sm md:inset-32">
	<div class="sticky top-0 bg-gray-900 p-2">
		<input autofocus type="search" placeholder="Search departments" class="w-full rounded-lg border border-gray-700 bg-transparent px-4 py-2 text-white placeholder:text-gray-700 focus:outline-none" bind:value={rawQuery} />
	</div>
	<div class="p-2">
		{#if sorted.length > 0}
			<nav class="grid grid-cols-1 gap-1 lg:grid-cols-2 xl:grid-cols-3">
				{#each sorted as [short, long]}
					<a on:click={() => dispatch("exit")} href="/{short}" class="group block rounded-md px-4 py-1.5 hover:bg-gray-700/30">
						<span class="font-bold tracking-wide text-white">{short}</span>
						<span class="ml-2 text-gray-400">{long}</span>
					</a>
				{/each}
			</nav>
		{:else}
			<div class="mt-4 text-center text-gray-400">No results</div>
		{/if}
	</div>
</div>
