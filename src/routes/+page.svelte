<script>
	// Not in the layout, because this may never adjust how the individual cards look
	import { goto } from '$app/navigation';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';

	import * as Card from '$lib/components/ui/card';

	let source = $state('');
	let demos = [
		{
			label: 'Galaxy',
			source: 'https://cdn.jsdelivr.net/npm/@scalar/galaxy/dist/latest.json'
		}
	];

	function openDocs(event) {
		event.preventDefault();
		goto(`/docs/${source}`);
	}
</script>

<svelte:head><title>OpenAPI Docs</title></svelte:head>

<div class="flex h-screen w-screen items-center justify-center">
	<Card.Root class="w-2xl">
		<Card.Header>
			<Card.Title
				class="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-center text-4xl font-bold text-transparent"
			>
				Finally some good fucking rendering
			</Card.Title>
			<Card.Description>
				Enter your json file source. Not the contents, something that my bun server can fetch
			</Card.Description>
		</Card.Header>
		<Card.Content>
			<form onsubmit={openDocs} class="flex gap-2">
				<Input bind:value={source} placeholder="Enter the url of your apispecs" />
				<Button data-sveltekit-preload-data="tap" href="/docs/{source}" disabled={source === ''}
					>submit</Button
				>
			</form>
		</Card.Content>

		<Card.Footer class="flex-col gap-2">
			<p>Or pick any of these example tokens:</p>
			<div class="flex justify-center gap-2">
				{#each demos as token}
					<Button variant="outline" href="/docs/{token.source}">{token.label}</Button>
				{/each}
			</div>
		</Card.Footer>
	</Card.Root>
</div>
