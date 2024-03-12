<script lang="ts">
	// Components
	import * as Card from '$lib/components/ui/card';

	// Types
	import type { SecondaryCheckpointConfig } from '$lib/containers/Timeline/Timeline.types';

	// Props
	export let config: SecondaryCheckpointConfig;
</script>

<!-- Secondary Checkpoint -->
<!-- Left Content -->
<div class="relative flex items-center justify-end pl-6 pr-10">
	<p class="text-sm text-gray-600">{config.date}</p>
	<div class="absolute -right-[9px] size-4 rounded-full border-4 border-blue-600 bg-white" />
</div>

<!-- Separator -->
<div class="border-l-2 border-dotted border-slate-400" />

<!-- Right Content -->
<div class="ml-6 flex max-w-[816px] gap-9 p-6">
	{#each config.cardConfig as cardConfig}
		<article class="flex-1">
			<Card.Root class="bg-white shadow-none">
				<Card.Image
					src={cardConfig.image.src}
					alt={cardConfig.image.alt}
					class="aspect-[5/2] object-cover"
				/>
				<Card.Content class="p-6">
					<p class="line-clamp-2">{cardConfig.description}</p>
				</Card.Content>
			</Card.Root>
		</article>
	{/each}
</div>
