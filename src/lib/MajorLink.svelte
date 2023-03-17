<script lang="ts">
	import { onMount } from "svelte";

	export let name = "";
	$: query = encodeURIComponent("ucsd " + name.toLowerCase() + " major");
	let tooltip = false;

	let mounted = false;
	onMount(() => (mounted = true));
</script>

<a href="https://www.google.com/search?q={query}" target="_blank" rel="noreferrer" class="group/majorLink relative z-10 inline-block rounded-md bg-gray-500/50 px-1 font-bold text-white transition-all duration-100 hover:bg-gray-500 ">
	<slot />
	{#if mounted}
		<div class="pointer-events-none absolute -left-24 -right-24 bottom-7 m-auto max-w-max origin-bottom scale-75 select-none rounded-md bg-white px-2 py-1 text-center text-sm font-semibold text-gray-800 opacity-0 shadow-lg transition-all empty:hidden group-hover/majorLink:scale-100 group-hover/majorLink:opacity-100">{name}</div>
	{/if}
</a>
