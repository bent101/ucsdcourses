<script>
	import SearchDepts from "$lib/SearchDepts.svelte";
</script>

<svelte:head>
	<title>UCSD Courses</title>
</svelte:head>

<h1 class="bg-gray-900 p-6 text-center text-3xl font-extrabold tracking-wide text-gray-600 shadow-lg">UCSD Course Catalog</h1>

<SearchDepts noEscButton />
