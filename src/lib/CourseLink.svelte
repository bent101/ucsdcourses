<script lang="ts">
	export let id = -1;
	export let href = "";

	const mouseenter = () => {
		id;
	};
</script>

<a {href} on:mouseenter={mouseenter} class=" inline-block rounded-md bg-sky-600/50 px-1 font-bold text-white transition-all duration-100 hover:bg-sky-600 ">
	<slot />
</a>
