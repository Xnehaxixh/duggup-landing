<script lang="ts">
	// Images
	import steveJobs from '$lib/images/steve-jobs.png';
	import samAltman from '$lib/images/sam-altman.png';
	import duggupLogo from '$lib/images/duggup-logo.png';

	import * as Card from '$lib/components/ui/card';
	import { ChevronUp } from 'lucide-svelte';
	import * as Avatar from '$lib/components/ui/avatar';
</script>

<div class="m-auto mt-4 grid max-w-7xl grid-cols-[208px_1px_auto]">
	<!-- Secondary Checkpoint -->
	<!-- Left Content -->
	<div class="relative flex items-center justify-end pl-6 pr-10">
		<p class="text-sm text-gray-600">Dec 2023</p>
		<div class="absolute -right-[9px] size-4 rounded-full border-4 border-blue-600 bg-white" />
	</div>

	<!-- Separator -->
	<div class="border-l-2 border-dotted border-slate-400" />

	<!-- Right Content -->
	<div class="ml-6 flex max-w-[816px] gap-9 p-6">
		<article class="flex-1">
			<Card.Root class="bg-white shadow-none">
				<Card.Image src={steveJobs} alt="Steve Jobs" class="aspect-[5/2] object-cover" />
				<Card.Content class="p-6">
					<p class="line-clamp-2">
						No amount of technology can convert a bad story into a good story.
					</p>
				</Card.Content>
			</Card.Root>
		</article>

		<article class="flex-1">
			<Card.Root class="bg-white shadow-none">
				<Card.Image src={samAltman} alt="Sam Altman" class="aspect-[5/2] object-cover" />
				<Card.Content class="p-6">
					<p class="line-clamp-2">
						Most people don't have original ideas. Here is how Sam Altman pushes himself to have
						unpopular ideas. He also claims that the best ideas are the ones that seem bad but are
						actually good.
					</p>
				</Card.Content>
			</Card.Root>
		</article>
	</div>

	<!-- Primary Checkpoint -->
	<!-- Left Content -->
	<div class="relative flex items-center justify-end py-6 pl-6 pr-10">
		<!-- Content -->
		<div class="flex grow flex-col items-end">
			<Avatar.Root class="size-11 rounded-full">
				<Avatar.Image src={duggupLogo} alt="Duggup" />
			</Avatar.Root>
			<p class="text-lg font-bold">Duggup</p>
			<p class="text-sm text-gray-500">San Francisco Bay Area</p>
			<p class="text-sm text-gray-500">Joined</p>
			<p class="text-sm text-gray-500">Nov 2023</p>
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
				<Card.Title>Co-Founder and CEO</Card.Title>
				<Card.Description>Full-time · Remote</Card.Description>
			</Card.Header>
		</Card.Root>
	</section>
</div>
