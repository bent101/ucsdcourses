<script lang="ts">
	import { afterNavigate } from "$app/navigation";
	import { depts } from "$lib/depts.js";
	import { createEventDispatcher } from "svelte";

	export let noEscButton = false;
	const dispatch = createEventDispatcher();

	let rawQuery = "";
	$: query = rawQuery.trim().toLowerCase();
	$: filtered = $depts.filter(([short, long]) => {
		return short.toLowerCase().includes(query) || long.toLowerCase().includes(query);
	});
	$: sorted = filtered.sort(([short1, long1], [short2, long2]) => {
		return +short2.toLowerCase().includes(query) - +short1.toLowerCase().includes(query);
	});

	afterNavigate(() => dispatch("exit"));
</script>

<svelte:body
	on:keydown={(e) => {
		console.log(e.key);
		if (e.key === "Escape") {
			dispatch("exit");
		}
	}}
/>

<div class=" absolute inset-8 top-32 z-10 min-h-[16rem] overflow-y-scroll rounded-xl bg-gray-900 text-sm shadow-lg md:inset-32">
	<div class="sticky top-0 z-20 flex gap-2 bg-gray-900 p-2">
		<input autofocus spellcheck="false" type="search" placeholder="Search departments" class="flex-1 rounded-lg border border-gray-700 bg-transparent px-4 py-2 text-white placeholder:text-gray-700 focus:outline-none" bind:value={rawQuery} />
		{#if !noEscButton}
			<button on:click={() => dispatch("exit")} class="rounded-lg border border-gray-700 px-3 font-extrabold text-gray-400 hover:bg-gray-700/30">ESC</button>
		{/if}
	</div>
	<div class="relative p-2">
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
	<div class=" pointer-events-none sticky inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-gray-900" />
</div>
