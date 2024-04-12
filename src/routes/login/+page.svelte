<script>
	import '$lib/style/style.css';
	import lg from '$lib/assets/logo.svg';
	import yc from '$lib/assets/yellowcheck.svg';

	let idVal = '';
	let passVal = '';
	let finish = 0;

	$: warning = +(idVal == '') + +(passVal == '') == 0 ? false : true;
	$: idCls = idVal == '' ? 'warning' : '';
	$: passCls = passVal == '' ? 'warning' : '';

	function cons() {
		console.log(idVal, passVal);
	}

	function check() {
		if(idVal && passVal)
			finish = 1;
		else(idVal && passVal) 
			return null;
	}
</script>

<div class="container">
	{#if !finish}
	<form class="form" method="GET">
		<img src={lg} alt="logo" />
		<input
			type="text"
			name="id"
			id="id"
			placeholder="아이디를 입력해주세요"
			bind:value={idVal}
			on:input={cons}
			class="input {idCls}"
		/>
		<input
			type="password"
			name="passwd"
			id="passwd"
			placeholder="비밀번호를 입력해주세요"
			bind:value={passVal}
			on:input={cons}
			class="input {passCls}"
		/>
	</form>
	{#if warning}
		<p class="warning-text">⚠ ️입력해주세요</p>
	{/if}
	<button class="primary-button" on:click={() => {check()}}>로그인</button>
	{:else}
	<div class="finish">
		<img src={yc} alt="finish" />
		<p>{idVal}님 환영합니다.<br/>회원가입이 완료되었습니다.</p>
	</div>
	<a class="primary-button" href="/login/allergy">계속</a>
	{/if}
</div>

<style scoped>
	.form {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 1rem;
	}

	.form img {
		height: 2rem;
		margin-bottom: 1rem;
	}

	.input {
		border: none;
		border-radius: 10px;
		background-color: var(--gray200);
		color: var(--graybbb);
		padding: 1rem;
		font-size: var(--sml);
		width: 100%;
	}

	.warning {
		border: var(--yellow) 0.1px solid;
	}

	.warning-text {
		font-family: 'Pretendard';
		color: var(--yellow);
		font-size: var(--xsml);
		text-align: center;
		margin-bottom: 0.5rem;
	}

	.finish {
		height: 100%;
		width: 100%;
		padding-top: 30%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 8rem;
	}

	.finish p {
		font-weight: var(--semi);
		color: var(--white);
		text-align: center;
	}
</style>
