<script lang="ts">
	import { page } from "$app/stores";
	import { depts } from "$lib/stores";
	import { derived } from "svelte/store";
	import SearchDepts from "$lib/SearchDepts.svelte";
	import { fly, fade } from "svelte/transition";

	const short = derived(page, ($page) => {
		const hashtag = $page.url.pathname.indexOf("#");
		return hashtag === -1 ? $page.url.pathname.slice(1) : $page.url.pathname.slice(1, hashtag);
	});

	const long = derived(short, ($short) => {
		const entry = $depts.find(([short, _]) => short === $short);
		return entry ? entry[1] ?? "" : "";
	});

	let showingDeptsSearch = false;
</script>

<svelte:head>
	<title>{$short} | UCSD Courses</title>
</svelte:head>

<button on:click={() => (showingDeptsSearch = !showingDeptsSearch)} class="group relative z-10 flex w-full items-center justify-center bg-gray-900 p-6 text-center text-xl tracking-wide shadow-lg">
	<div class="">
		<span class="font-extrabold tracking-wide text-white">{$short}</span>
		<span class="ml-2 font-bold text-gray-400">{$long}</span>
	</div>
	<svg class="relative top-0 mx-4 inline w-5 fill-none stroke-gray-600 stroke-[3] transition-all duration-200 group-hover:top-1 group-hover:stroke-white group-hover:stroke-[4]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15">
		<path d="M2,2 l8,7 l8,-7" stroke-linecap="round" />
	</svg>
</button>

{#if showingDeptsSearch}
	<div on:click={() => (showingDeptsSearch = false)} transition:fade={{ duration: 100 }} class="absolute top-0 h-[200vh] w-full bg-gray-900/50" />
	<div transition:fly={{ duration: 200, y: -96 }} class="">
		<SearchDepts on:exit={() => (showingDeptsSearch = false)} />
	</div>
{/if}
