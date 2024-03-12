<script lang="ts">
	// Components
	import SecondaryCheckpoint from '$lib/containers/Timeline/secondaryCheckpoint.svelte';
	import PrimaryCheckpoint from '$lib/containers/Timeline/primaryCheckpoint.svelte';

	// Types
	import type { TimelineCheckpoints } from '$lib/containers/Timeline/Timeline.types';

	// Props
	export let checkpoints: TimelineCheckpoints;
</script>

<div class="m-auto mt-4 grid max-w-7xl grid-cols-[208px_1px_auto]">
	{#each checkpoints as checkpoint}
		<!-- Secondary Checkpoint -->
		{#if checkpoint.type === 'secondary'}
			<SecondaryCheckpoint config={checkpoint.config} />

			<!-- Primary Checkpoint -->
		{:else if checkpoint.type === 'primary'}
			<PrimaryCheckpoint config={checkpoint.config} />
		{/if}
	{/each}
</div>
