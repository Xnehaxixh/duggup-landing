<script lang="ts">
	// Components
	import Timeline from '$lib/containers/Timeline/timeline.svelte';
	import IntroCard from '$lib/components/intro-card.svelte';
	import { timelineCheckpoints } from '$common/timeline.constants';
</script>

<svelte:head>
	<title>Duggup</title>
</svelte:head>

<IntroCard />
<Timeline checkpoints={timelineCheckpoints} />
