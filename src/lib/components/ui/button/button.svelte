<script lang="ts">
	import { Button as ButtonPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js.js';
	import { buttonVariants, type Props, type Events } from './index.js';

	type $$Props = Props;
	type $$Events = Events;

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';
	export let builders: $$Props['builders'] = [];
	export { className as class };

	// Variant
	let variantClass = '';

	if (variant === 'outline') {
		variantClass =
			'rounded-sm border border-b-4 border-gray-600 bg-white px-5 py-3 text-gray-500 hover:text-gray-700 active:bg-primary active:text-white';
	}
</script>

<ButtonPrimitive.Root
	{builders}
	class={cn(buttonVariants({ variant, size, className }), variantClass)}
	type="button"
	{...$$restProps}
	on:click
	on:keydown
>
	<slot />
</ButtonPrimitive.Root>
