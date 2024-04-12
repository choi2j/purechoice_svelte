<script>
	import { Html5Qrcode } from 'html5-qrcode';
	import { onMount } from 'svelte';

	let scanning = false;

	// @ts-ignore
	let html5Qrcode;

	onMount(init);

	function init() {
		html5Qrcode = new Html5Qrcode('reader');
	}

	function start() {
		// @ts-ignore
		html5Qrcode.start(
			{ facingMode: 'environment' },
			{
				fps: 10,
				qrbox: { width: 250, height: 250 }
			},
			onScanSuccess,
			onScanFailure
		);
		scanning = true;
	}

	async function stop() {
		// @ts-ignore
		await html5Qrcode.stop();
		scanning = false;
	}

	// @ts-ignore
	function onScanSuccess(decodedText, decodedResult) {
		alert(`Code matched = ${decodedText}`);
		console.log(decodedResult);
	}

	// @ts-ignore
	function onScanFailure(error) {
		console.warn(`Code scan error = ${error}`);
	}
</script>

<main>
	<reader id="reader" />
	{#if scanning}
		<button on:click={stop}>stop</button>
	{:else}
		<button on:click={start}>start</button>
	{/if}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}
	reader {
		width: 100%;
		min-height: 500px;
		background-color: black;
	}
</style>
