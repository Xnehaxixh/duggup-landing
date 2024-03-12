<script lang="ts">
	// Images
	import duggupLogo from '$lib/images/duggup-logo.png';
	import krishnaKiranImage from '$lib/images/krishna-kiran.png';

	import { SquareArrowOutUpRight, Ellipsis } from 'lucide-svelte';

	// Components
	import * as Avatar from '$lib/components/ui/avatar';
	import Button from './ui/button/button.svelte';

	// States
	let isFollowing = false;
</script>

<section class="m-auto flex max-w-7xl">
	<!-- Profile & Description Container -->
	<div class="flex basis-10/12 items-center gap-14 pl-36 pr-4">
		<!-- Profile Image & Name -->
		<div class="inline-flex flex-col">
			<Avatar.Root class="size-32 rounded-full border-[5px]">
				<Avatar.Image src={krishnaKiranImage} alt="Krishna Kiran" />
			</Avatar.Root>
			<h1 class="max-w-32 break-words text-center text-2xl font-bold text-gray-600">
				Krishna Kiran
			</h1>
		</div>

		<div class="flex flex-col">
			<!-- Description -->
			<p class="max-w-2xl">
				Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of
				Engineering. I write hot-takes on building a business, shipping delightful products and
				accelerating product and career growth.
			</p>

			<div class="mt-5 flex items-center justify-between">
				<!-- Follow -->
				<Button
					variant="outline"
					class=" flex gap-2"
					on:click={() => {
						isFollowing = !isFollowing;
					}}
				>
					<p class="text-xs">{isFollowing ? 'Followed' : 'Follow'}</p>
				</Button>
			</div>
		</div>
	</div>

	<!-- Current Company Info -->
	<div class="flex grow basis-2/12 pr-6">
		<div class="flex flex-col items-end justify-center">
			<Avatar.Root class="size-9 rounded-full">
				<Avatar.Image src={duggupLogo} alt="Duggup" />
			</Avatar.Root>
			<p class="text-lg font-bold">Duggup</p>
			<p class="text-right text-sm text-gray-500">Co-Founder and CEO</p>

			<!-- Website Link -->
			<div class="mt-5 flex items-center">
				<Button
					href="https://www.krishnakiran.com/"
					target="_blank"
					variant="link"
					class="flex items-center justify-center p-0 text-sm text-gray-600"
				>
					<p class="mr-1">My Website</p>
					<SquareArrowOutUpRight class="mt-[1px] size-4" />
				</Button>
				<Ellipsis class="ml-4 size-8 cursor-pointer text-gray-400" />
			</div>
		</div>
	</div>
</section>
