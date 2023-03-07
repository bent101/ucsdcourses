<script>
	import SearchDepts from "$lib/SearchDepts.svelte";
</script>

<svelte:head>
	<title>UCSD Courses</title>
</svelte:head>

<h1 class="mt-4 text-center text-4xl font-extrabold uppercase leading-relaxed tracking-wider text-gray-600 underline decoration-gray-700/50 underline-offset-[10px]">UCSD Course Catalog</h1>

<SearchDepts noEscButton />
