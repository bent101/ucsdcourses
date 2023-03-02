<div>
	<slot />
</div>

<style lang="postcss">
	div :global(h1) {
		@apply text-gray-600 underline underline-offset-[10px] decoration-gray-700/50 font-extrabold text-center uppercase text-4xl leading-relaxed tracking-wider;
	}
	div :global(h2) {
		@apply font-extrabold mt-8 text-3xl text-gray-400;
	}
	div :global(h3) {
		@apply font-extrabold tracking-wide mt-6 text-2xl text-gray-500 uppercase;
	}
	div :global(h4) {
		@apply mt-4 font-extrabold tracking-wide text-lg text-gray-500 uppercase;
	}
	div :global(.note) {
		@apply bg-sky-900/30 text-sky-300 mt-1 border-l-2 border-sky-700 px-2 py-1;
	}
</style>
