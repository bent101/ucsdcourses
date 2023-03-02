<script lang="ts">
	export let name = '';
	$: query = encodeURIComponent('ucsd ' + name.toLowerCase() + ' major');
</script>

<a href="https://www.google.com/search?q={query}" target="_blank" rel="noreferrer" class="rounded-md px-1 inline-block bg-gray-500/50 text-white font-bold hover:bg-gray-500 transition-all duration-100 ">
	<slot />
</a>
