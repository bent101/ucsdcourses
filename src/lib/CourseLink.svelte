<script lang="ts">
	export let id = -1;
	export let href = '';

	const mouseenter = () => {
		id;
	};
</script>

<a {href} on:mouseenter={mouseenter} class=" inline-block rounded-md px-1 bg-sky-600/50 text-white font-bold hover:bg-sky-600 transition-all duration-100 ">
	<slot />
</a>
