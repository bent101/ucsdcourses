<script lang="ts">
	export let id = "";
	export let shortName = "";
	export let longName = "";
	export let units = "";
	export let url = "";

	let justCopied = false;

	const onclick = async () => {
		if (!justCopied) {
			await navigator.clipboard.writeText(window.location.origin + url);
			console.log(url);
			justCopied = true;
			setTimeout(() => (justCopied = false), 2000);
		}
	};
</script>

<section class="rounded-lg bg-gray-700 overflow-hidden mt-4 transition-all duration-200 hover:shadow-lg hover:shadow-black/30 group" {id}>
	<div class="bg-sky-700 py-2 pl-4 pr-2">
		<div class="flex gap-2">
			<h5 class="mr-auto text-white font-extrabold text-lg tracking-wide">
				{shortName}
				<span class="ml-2 rounded-full px-2 py-0.5 bg-sky-200 empty:hidden text-sky-700 font-bold text-sm relative bottom-[1px]">{units}</span>
			</h5>
			<button on:click={onclick} class=" min-w-max opacity-0 group-hover:opacity-100 transition-all duration-150 text-sky-200/60 hover:bg-sky-300/10 border border-sky-300/30 hover:border-transparent rounded-full px-2 w-24 ">{justCopied ? "Copied!" : "Copy link"}</button>
		</div>
		<h6 class="text-sky-200 text-base font-bold">{longName}</h6>
	</div>
	<div class="px-4 [&>*]:py-2 text-gray-300 divide-y divide-gray-500 empty:hidden empty:[&>*]:hidden">
		<slot />
	</div>
</section>
