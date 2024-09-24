<script>
	import { onMount } from 'svelte';
	import { Html5Qrcode } from 'html5-qrcode';

	import '$lib/style/style.css';
	import rt from '$lib/assets/return.svg';

	// @ts-ignore
	let html5QrCode;


	//@ts-ignore
	export let data;
	console.log(data);

	let barcode = '';

	onMount(() => {
		html5QrCode = new Html5Qrcode('reader');

		requestCameraPermission();
	});

	function requestCameraPermission() {
		navigator.mediaDevices
			.getUserMedia({ video: true })
			// @ts-ignore
			.then((stream) => {
				// Permission granted, start scanning
				Html5Qrcode.getCameras()
					.then((devices) => {
						if (devices && devices.length) {
							const cameraId = devices[0].id;
							startScanning(cameraId);
						}
					})
					.catch((err) => {
						console.error('Error getting cameras:', err);
					});
			})
			.catch((err) => {
				console.error('Error accessing camera:', err);
				alert('Error accessing camera. Please grant permission to continue.');
			});
	}

	// @ts-ignore
	function startScanning(cameraId) {
		// @ts-ignore
		html5QrCode
			.start(
				{ deviceId: { exact: cameraId } },
				{ fps: 10, qrbox: { width: 250, height: 100 } },
				// @ts-ignore
				(decodedText, decodedResult) => {
					console.log('Scanned:', decodedText);
					barcode = decodedText;
				},
				// @ts-ignore
				(errorMessage) => {
					console.error('Scan error:', errorMessage);
				}
				// @ts-ignore
			)
			// @ts-ignore
			.catch((err) => {
				console.error('Error starting scanner:', err);
			});
	}

	// @ts-ignore
	function stopScanning() {
		// @ts-ignore
		if (html5QrCode) {
			html5QrCode
				.stop()
				.then(() => {
					console.log('Scanner stopped');
				})
				// @ts-ignore
				.catch((err) => {
					console.error('Error stopping scanner:', err);
				});
		}
	}

	// @ts-ignore
	$: {
		// @ts-ignore
		if (html5QrCode) {
			window.addEventListener('beforeunload', () => {
				// @ts-ignore
				html5QrCode.stop().catch((err) => {
					console.error('Error stopping scanner:', err);
				});
			});
		}
	}

	let isSudong = 0;
</script>

<div class="container">
	<nav>
		{#if isSudong == 0}
			<a href="/home">
				<img src={rt} alt="return" />
			</a>
		{:else}
			<a
				href="/home/scan"
				on:click={() => {
					isSudong = 0;
				}}
			>
				<img src={rt} alt="return" />
			</a>
			<p class="nav-title">바코드 입력</p>
		{/if}
		<button></button>
	</nav>
	{#if isSudong == 0}
		<div id="reader"></div>
		<button
			class="sudong"
			on:click={() => {
				isSudong = 1;
				stopScanning();
			}}>수동으로 입력하기</button
		>
		<a class="primary-button inscan" href="/home/scan/result/{barcode}" on:click={() => {stopScanning; console.log(typeof(barcode))}}>스캔하기</a>
	{:else}
		<div class="main">
			<div class="form">
				<input
					type="number"
					name="search"
					id="search"
					class="search-input"
					placeholder="12341234"
					bind:value={barcode}
				/>
				<a type="submit" class="primary-button" href="/home/scan/result/{barcode}" on:click={stopScanning}>스캔하기</a>
			</div>
		</div>
	{/if}
</div>

<style scoped>
	nav {
		padding: 1.75rem;
	}
	nav a {
		color: var(--white);
	}

	nav a img {
		height: 1rem;
	}

	nav button {
		background: none;
		background-color: none;
		border: none;
	}

	nav button img {
		height: 1.3rem;
	}

	.container {
		padding: 0;
		background-color: #000;
	}

	.nav-title {
		font-size: var(--mid);
		color: var(--white);
		font-weight: var(--regu);
	}

	.container {
		display: flex;
		flex-direction: column;
	}

	#reader {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 80%;
		background-color: #000;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}

	.sudong {
		background: none;
		border: none;
		font-size: var(--xsml);
		font-weight: var(--regu);
		color: var(--white);
		margin: 1rem 1.75rem;
		border-radius: 0;
		text-decoration: underline;
	}

	.inscan {
		margin: 1.75rem;
	}

	.main {
		height: 100%;
		width: 100%;
		padding: 1.75rem;
		display: flex;
		flex-direction: column;
	}

	.form {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.form input {
		margin-top: auto;
		margin-bottom: 5rem;
		padding: 0.5rem;
		border: none;
		background: none;
		background-color: none;
		border-bottom: 1px solid var(--white);
		outline: none;
		font-size: var(--mid);
		font-weight: var(--semi);
		color: var(--white);
		text-align: center;
	}

	.primary-button {
		margin-top: auto;
	}
</style>
