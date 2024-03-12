<script lang="ts">
	// Images
	import duggupLogo from '$lib/images/duggup-logo.png';
	import krishnaKiranImage from '$lib/images/krishna-kiran.png';

	// SVG Images
	import DuggupText from '$lib/images/duggup-text.svelte';

	import { BookOpen, SquarePlus, Home, AlignStartVertical, ChevronDown } from 'lucide-svelte';

	// Components
	import * as Avatar from '$lib/components/ui/avatar';
	import Button from './ui/button/button.svelte';

	let navlinks = [
		{ href: '/', text: 'Home', Icon: Home },
		{ href: '/explore', text: 'Explore', Icon: AlignStartVertical },
		{ href: '/learn', text: 'Learn', Icon: BookOpen }
	];

	// Assumed User
	let user = {
		name: 'Krishna Kiran',
		avatar: krishnaKiranImage
	};
</script>

<!-- Main Navbar Container -->
<div
	class="sticky top-0 z-50 m-auto flex max-w-screen-2xl items-center gap-10 border-b-2 border-dotted py-3 pl-4 backdrop-blur"
>
	<!-- Logo Container -->
	<div class="flex grow items-center">
		<a href="/" class="inline-flex max-h-7 items-center gap-2">
			<Avatar.Root class="size-7 rounded-sm">
				<Avatar.Image src={duggupLogo} alt="Duggup" />
			</Avatar.Root>
			<div class="hidden md:block">
				<DuggupText />
			</div>
		</a>
	</div>

	<!-- Navbar Links -->
	<nav class="flex gap-8">
		<!-- Page Links -->
		<div class="flex gap-1">
			{#each navlinks as link}
				<Button variant="ghost" class="gap-2">
					<div class="mt-[1px] h-[14px] w-[14px]">
						<svelte:component this={link.Icon} class="size-4 text-gray-500" />
					</div>
					<a href={link.href} class="text-sm text-gray-500 hover:text-gray-700">{link.text}</a>
				</Button>
			{/each}
		</div>

		<!-- Action Link -->
		<div>
			<Button
				variant="outline"
				class="flex gap-2 px-5 py-3"
				on:click={() => alert('Post created!')}
			>
				<SquarePlus class="size-4 " />
				<p class="text-sm">Post</p>
			</Button>
		</div>
	</nav>

	<!-- Avatar Container -->
	<Button variant="ghost" class="mr-2 flex h-11 items-center gap-1 space-x-2">
		<Avatar.Root class="size-11 rounded-full border border-gray-500">
			<Avatar.Image src={user.avatar} alt={user.name} />
			<Avatar.Fallback
				>{user.name
					.split(' ')
					.map((name) => name[0])
					.join('')
					.slice(0, 2)}</Avatar.Fallback
			>
		</Avatar.Root>
		<p class="hidden text-xl font-medium text-gray-600 lg:block">{user.name}</p>
		<ChevronDown class="mt-1 size-4" />
	</Button>
</div>
