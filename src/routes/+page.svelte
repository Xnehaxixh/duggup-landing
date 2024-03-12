<script lang="ts">
	// Components
	import Timeline from '$lib/containers/Timeline/timeline.svelte';
	import IntroCard from '$lib/containers/IntroCard/intro-card.svelte';
	import { timelineCheckpoints } from '$common/timeline.constants';
</script>

<svelte:head>
	<title>Duggup</title>
</svelte:head>

<IntroCard />
<Timeline checkpoints={timelineCheckpoints} />
