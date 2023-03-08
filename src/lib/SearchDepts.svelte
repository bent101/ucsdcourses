<script lang="ts">
	import { afterNavigate } from "$app/navigation";
	import { depts, recentDepts } from "$lib/stores.js";
	import { createEventDispatcher } from "svelte";

	export let noEscButton = false;
	const dispatch = createEventDispatcher();

	let rawQuery = "";
	$: query = rawQuery.trim().toLowerCase();
	$: indexed = $depts.map((e, i) => [...e, i]) as [string, string, number][];
	$: filtered = indexed.filter(([short, long, i]) => {
		if (!query) return $recentDepts?.indexOf(i) === -1;
		return short.toLowerCase().includes(query) || long.toLowerCase().includes(query);
	});
	$: sorted = filtered.sort(([short1], [short2]) => {
		return +short2.toLowerCase().includes(query) - +short1.toLowerCase().includes(query);
	});

	afterNavigate(() => dispatch("exit"));

	const addToRecents = async (i: number) => {
		await new Promise((res) => setTimeout(res, 100));
		if ($recentDepts) {
			const j = $recentDepts.indexOf(i);
			if (j === -1) {
				$recentDepts = [i, ...$recentDepts];
				if ($recentDepts.length > 5) {
					$recentDepts = $recentDepts.slice(0, 5);
				}
			} else {
				const k = $recentDepts.length - 1;
				[$recentDepts[j], $recentDepts[k]] = [$recentDepts[k], $recentDepts[j]];
			}
		}
	};
</script>

<svelte:body
	on:keydown={(e) => {
		if (e.key === "Escape") {
			dispatch("exit");
		}
	}}
/>

<div class="relative mx-auto h-[28rem] max-w-lg overflow-y-scroll overscroll-y-contain rounded-b-2xl bg-gray-900 text-sm shadow-lg">
	<div class="sticky top-0 flex gap-2 bg-gray-900 p-2">
		<input autofocus spellcheck="false" type="search" placeholder="Search departments" class="flex-1 rounded-lg border border-gray-700 bg-transparent px-4 py-2 text-white placeholder:text-gray-700 focus:outline-none" bind:value={rawQuery} />
		{#if !noEscButton}
			<button on:click={() => dispatch("exit")} class="rounded-lg border border-gray-700 px-3 font-extrabold text-gray-400 hover:bg-gray-700/30">ESC</button>
		{/if}
	</div>
	<div class="p-2">
		{#if sorted.length > 0}
			<nav class="">
				{#if !query && $recentDepts && $recentDepts.length > 0}
					{#each $recentDepts as i}
						{@const [short, long] = $depts[i]}
						<a on:click={() => addToRecents(i)} href="/{short}" class="group block rounded-md px-4 py-1.5 hover:bg-gray-700/30">
							<span class="font-bold tracking-wide text-white">{short}</span>
							<span class="ml-2 text-gray-400">{long}</span>
						</a>
					{/each}
					<hr class="m-2 border-t border-gray-700" />
				{/if}
				{#each sorted as [short, long, i]}
					<a on:click={() => addToRecents(i)} href="/{short}" class="group block rounded-md px-4 py-1.5 hover:bg-gray-700/30">
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
