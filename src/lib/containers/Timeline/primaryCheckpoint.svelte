<script lang="ts">
	// Components
	import * as Card from '$lib/components/ui/card';
	import { ChevronUp } from 'lucide-svelte';
	import * as Avatar from '$lib/components/ui/avatar';

	// Types
	import type { PrimaryCheckpointConfig } from '$lib/containers/Timeline/Timeline.types';

	// Props
	export let config: PrimaryCheckpointConfig;
</script>

<!-- Primary Checkpoint -->
<!-- Left Content -->
<div class="relative flex items-center justify-end py-6 pl-6 pr-10">
	<!-- Content -->
	<div class="flex grow flex-col items-end">
		<Avatar.Root class="size-11 rounded-full">
			<Avatar.Image src={config.company.image.src} alt={config.company.image.alt} />
		</Avatar.Root>
		<p class="text-lg font-bold">{config.company.name}</p>
		<p class="text-sm text-gray-500">{config.company.location}</p>
		<p class="text-sm text-gray-500">Joined</p>
		<p class="text-sm text-gray-500">{config.company.joiningDate}</p>
	</div>

	<!-- Icons -->
	<div class="absolute -right-[15px] size-7 rounded-full border-[9px] border-blue-600 bg-white" />
	<ChevronUp
		class="absolute -right-[13px] top-0 flex justify-center rounded-full bg-neutral-100 text-slate-400"
	/>
</div>

<!-- Separator -->
<div class="border-l-2 border-dotted border-slate-400" />

<!-- Right Content -->
<section class="ml-6 flex max-w-[816px] gap-9 px-6 py-12">
	<Card.Root class="flex-1 bg-white shadow-none">
		<Card.Header>
			<Card.Title>{config.company.role}</Card.Title>
			<Card.Description>{config.company.employmentType}</Card.Description>
		</Card.Header>
	</Card.Root>
</section>
