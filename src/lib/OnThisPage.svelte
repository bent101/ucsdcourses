<script lang="ts">
	import { onMount } from "svelte";

	const styles = new Map([
		["H2", "text-gray-500 font-bold"],
		["H3", "text-gray-500"],
		["H4", "text-gray-500"],
		["H5", "text-gray-100"]
	]);

	let links = [] as { href: string; text: string; styles: string }[];
	onMount(() => {
		links = Array.from(document.querySelectorAll("h2,h3,h4,h5")).map((node) => ({
			href: node.id ? "#" + node.id : "",
			text: node.textContent ?? "",
			styles: styles.get(node.tagName) ?? ""
		}));
		console.log(links);
	});
</script>

<nav class="sticky top-32 bottom-0">
	<span class="absolute -top-2 left-4 rounded-full bg-gray-800 px-2 text-sm font-bold uppercase tracking-wide text-gray-600">On this page</span>
	<ul class="mt-2 max-h-[80vh] overflow-y-scroll rounded-lg border border-gray-700 p-4 text-white">
		<li class="pt-2">
			{#each links as { href, text, styles }}
				<a {href} class="{styles} block rounded-md px-2 py-1 hover:bg-gray-700/30">{text}</a>
			{/each}
		</li>
	</ul>
</nav>
