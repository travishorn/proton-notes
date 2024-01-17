<script>
	import SiteHeader from '$lib/SiteHeader.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import NoteListing from '$lib/NoteListing.svelte';
</script>

<svelte:head>
	<title>Proton Notes</title>
</svelte:head>

<SiteHeader />
<div class="flex">
	<Sidebar />
	<NoteListing />
</div>
