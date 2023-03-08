<script lang="ts">
	import { svg_element } from "svelte/internal";

	export let id = "";
	export let shortName = "";
	export let longName = "";
	export let units = "";
	export let url = "";

	let justCopied = false;

	const copyLink = async () => {
		if (!justCopied) {
			await navigator.clipboard.writeText(window.location.origin + url);
			justCopied = true;
			setTimeout(() => (justCopied = false), 2000);
		}
	};
</script>

<section class="group my-4 scroll-mt-32 overflow-clip rounded-lg bg-gray-700/80 shadow-lg transition-all duration-200" {id}>
	<div class="bg-sky-800 py-2 pl-4 pr-2">
		<div class="flex items-center gap-3">
			<h5 class="inline text-lg font-extrabold tracking-wide text-white" {id}>
				{shortName}
			</h5>
			<span class="-translate-y-px rounded-full bg-sky-200/80 px-1.5 text-sm font-extrabold text-sky-800 empty:hidden">{units}</span>
			<button on:click={copyLink} class="ml-auto w-24 min-w-max rounded-full border border-sky-300/30 px-2 text-sky-200/60 opacity-0 transition-all duration-150 hover:border-transparent hover:bg-sky-300/10 group-hover:opacity-100 pointer-coarse:opacity-100 sm:opacity-0 ">{justCopied ? "Copied!" : "Copy link"}</button>
		</div>
		<h6 class="text-sm font-bold leading-tight tracking-wide text-sky-200">{longName}</h6>
	</div>
	<div class="divide-y divide-gray-500 px-4 text-gray-300 empty:hidden [&>*]:py-2 empty:[&>*]:hidden">
		<slot />
	</div>
</section>
