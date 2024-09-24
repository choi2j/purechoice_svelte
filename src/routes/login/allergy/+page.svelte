<script>
	import '$lib/style/style.css';
	import logo from '$lib/assets/logo.svg';
	
</script>

<div class="container">
	<img src={logo} alt="logo" />
	<p class="big">알레르기 정보 입력</p>
	<p class="small">
		퓨어초이스는 여러분이 입력하신 알레르기 종류에 따라 선택가능한 상품을 알려드립니다.<br /><br
		/>따라서 앱을 시작하기에 앞서 보다 편안한 앱 사용을 위해 알레르기 정보를 입력해주시길 바랍니다.
	</p>
	<a class="primary-button" href="/login/allergy/select">계속</a>
</div>

<style scoped>
	.container {
		gap: 3rem;
		text-align: center;
	}
	
	img {
		height: 3rem;
		margin-bottom: 1rem;
        margin-top: 5rem;
	}

	.big {
		font-size: var(--big);
		font-weight: var(--semi);
		color: var(--white);
	}

	.small {
		font-size: var(--xsml);
		font-weight: var(--regu);
		color: var(--white);
		word-break: keep-all;
	}

    .primary-button {
        margin-top: auto;
    }
</style>
