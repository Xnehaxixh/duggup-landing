import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess({})],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$lib: 'src/lib',
			$common: 'src/common'
		}
	},

	// https://www.reddit.com/r/sveltejs/comments/v0mx4i/typeerror_unknown_file_extension_svelte/
	// https://github.com/sveltejs/vite-plugin-svelte/issues/293#issuecomment-1144004669
	// Lucide icons have issues with SSR in SvelteKit, so we need to exclude them from optimization
	optimizeDeps: {
		exclude: ['lucide-svelte']
	}
};

export default config;
