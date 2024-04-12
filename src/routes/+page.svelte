<script>
	import '$lib/style/style.css';
	import mg from '$lib/assets/magnifyer.svg';
	import fp from '$lib/assets/fileplus.svg';
	import bc from '$lib/assets/bluecheck.svg';
	import lg from '$lib/assets/logo.svg';

	let flow = 0;

    function nextflow() {
        flow++;
    }
</script>

<div class="container">
	{#if flow == 0}
		<div class="flow">
			<img src={mg} alt="flow" />
			<p>그동안 영양성분을 직접 찾아보면서<br />제품을 고르느라 힘드셨다고요?</p>
		</div>
		<button class="primary-button" on:click={nextflow}>다음</button>
	{:else if flow == 1}
		<div class="flow">
			<img src={fp} alt="flow" />
			<p>여러분이 피해야하는 음식 정보를<br />쉽고 간편하게 입력해요!</p>
		</div>
		<button class="primary-button" on:click={nextflow}>다음</button>
	{:else if flow == 2}
		<div class="flow">
			<img src={bc} alt="flow" />
			<p>한눈에! 편하고 간편하게<br />퓨어초이스가 대신 알려줄게요!</p>
		</div>
		<button class="primary-button" on:click={nextflow}>다음</button>
	{:else if flow == 3}
		<div class="flow">
			<img src={lg} alt="flow" />
			<p>퓨어초이스에서 시작해봐요!</p>
		</div>
		<a class="primary-button" href="/login">시작하기</a>
	{/if}
</div>

<style scoped>
	.flow {
		height: 100%;
		width: 100%;
		padding-top: 30%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 8rem;
	}

	.flow p {
		font-weight: var(--semi);
		color: var(--white);
		text-align: center;
	}
</style>
