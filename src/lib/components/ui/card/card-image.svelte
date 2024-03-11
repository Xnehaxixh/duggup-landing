<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js.js';

	type $$Props = HTMLImgAttributes;

	let className: $$Props['class'] = undefined;
	let alt: $$Props['alt'] = undefined;
	let src: $$Props['src'] = undefined;
	export { className as class };
</script>

<img class={cn('h-auto w-full', className)} {src} {alt} {...$$restProps} />
