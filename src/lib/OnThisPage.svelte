<script lang="ts">
	import { afterNavigate } from "$app/navigation";
	import { afterUpdate } from "svelte";
	import { compute_slots } from "svelte/internal";

	const styles = new Map([
		["H2", "border border-gray-700 bg-[#283140] text-gray-400 font-extrabold tracking-wide"],
		["H3", "border border-gray-700 bg-gray-800 text-gray-500 font-extrabold tracking-wide"],
		["H4", "border border-gray-700 bg-gray-800 text-gray-500"],
		["H5", "text-gray-400"]
	]);

	type Link = {
		href: string;
		text: string;
		styles: string;
	};

	type Group = {
		header: Link | undefined;
		content: Link[];
		level: number;
	};

	let groups: Group[] = [];

	let windowScrollY = 0;
	let windowHeight = 0;
	let ul: Element;

	afterUpdate(() => {
		const windowScroll = windowScrollY / (document.body.scrollHeight - windowHeight);
		ul.scrollTo(0, windowScroll * (ul.scrollHeight - ul.clientHeight) - ul.clientHeight / 3);
		// console.log({
		// 	windowScrollY,
		// 	windowHeight,
		// 	documentScrollHeight: document.body.scrollHeight,
		// 	ulHeight: ul.clientHeight,
		// 	ulScrollHeight: ul.scrollHeight
		// });
	});

	afterNavigate(() => {
		groups = [{ header: undefined, content: [], level: 0 }];
		for (const node of document.querySelectorAll("h2,h3,h4,h5")) {
			const link = {
				href: node.id ? "#" + node.id : "",
				text: node.textContent ?? "",
				styles: styles.get(node.tagName) ?? ""
			};
			if (node.tagName === "H5") {
				groups[groups.length - 1].content.push(link);
			} else {
				groups.push({ header: link, content: [], level: +node.tagName[1] - 2 });
			}
		}
	});
</script>

<svelte:window bind:scrollY={windowScrollY} bind:innerHeight={windowHeight} />

<ul bind:this={ul} class="relative h-full overflow-y-scroll rounded-lg border border-gray-700 p-4 pb-0">
	{#each groups as { header, content, level }}
		<li class:ml-2={level === 1} class:ml-4={level === 2} class:ml-6={level === 3} class="mt-2">
			{#if header !== undefined}
				<a href={header.href} class="{header.styles} sticky top-0 my-1 block rounded-md px-2 py-1.5 shadow-lg hover:bg-gray-700 hover:text-white">{header.text}</a>
			{/if}
			<div>
				{#each content as { href, text, styles }}
					<a {href} class="{styles} block rounded-md px-2 py-1 hover:bg-gray-700 hover:text-white">{text}</a>
				{/each}
			</div>
		</li>
	{/each}
	<div class="pointer-events-none sticky inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-gray-800" />
</ul>

<span class="absolute left-4 top-[7.5rem] rounded-full bg-gray-800 px-2 text-sm font-bold uppercase tracking-wider text-gray-500">On this page</span>
