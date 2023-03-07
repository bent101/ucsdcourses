<script lang="ts">
	import { page } from "$app/stores";
	import { depts } from "$lib/depts";
	import { derived } from "svelte/store";
	import { fade, scale } from "svelte/transition";
	import SearchDepts from "$lib/SearchDepts.svelte";

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

<button on:click={() => (showingDeptsSearch = true)} class="group block w-full bg-gray-900 p-6 text-center text-xl font-extrabold tracking-wide shadow-lg">
	<span class="font-bold tracking-wide text-white">{$short}</span>
	<span class="ml-2 text-gray-400">{$long}</span>
	<svg class="relative -top-0.5 ml-2 inline w-5 fill-none stroke-gray-600 stroke-[3] transition-all duration-200 group-hover:top-0.5 group-hover:stroke-white group-hover:stroke-[4]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15">
		<path d="M2,2 l8,7 l8,-7" stroke-linecap="round" />
	</svg>
</button>

{#if showingDeptsSearch}
	<div in:fade={{ duration: 150 }} class="fixed inset-0 z-10 bg-gray-900/60 backdrop-blur-sm" />
	<div in:scale={{ duration: 150 }} class="fixed inset-0 z-10 origin-top">
		<SearchDepts on:exit={() => (showingDeptsSearch = false)} />
	</div>
{/if}
