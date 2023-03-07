<script lang="ts">
	import { afterNavigate } from "$app/navigation";

	const styles = new Map([
		["H2", "border-gray-700 hover:text-gray-200 border bg-gray-800 py-1.5 top-0 sticky my-1 text-gray-500 font-extrabold tracking-wide"],
		["H3", "border-gray-700 hover:text-gray-200 border bg-gray-800 py-1.5 top-0 sticky my-1 text-gray-500 font-semibold"],
		["H4", "border-gray-700 hover:text-gray-200 border bg-gray-800 py-1.5 top-0 sticky my-1 text-gray-500"],
		["H5", "text-gray-400 hover:text-gray-200"]
	]);

	let links = [] as { href: string; text: string; styles: string }[];
	afterNavigate(() => {
		links = Array.from(document.querySelectorAll("h2,h3,h4,h5")).map((node) => ({
			href: node.id ? "#" + node.id : "",
			text: node.textContent ?? "",
			styles: styles.get(node.tagName) ?? ""
		}));
		console.log(links);
	});
</script>

<span class="absolute left-4 top-[7.5rem] rounded-full bg-gray-800 px-2 text-sm font-bold uppercase tracking-wider text-gray-500">On this page</span>
<ul class="h-full overflow-y-scroll rounded-lg border border-gray-700 p-4 pb-0">
	<li class="mt-2">
		{#each links as { href, text, styles }, i}
			<a {href} class="{styles} block rounded-md px-2 py-1 hover:bg-gray-700">{text}</a>
		{/each}
	</li>
	<div class="pointer-events-none sticky inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-gray-800" />
</ul>
