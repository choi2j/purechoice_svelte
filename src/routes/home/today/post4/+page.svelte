<script>
	import '$lib/style/style.css';
	import book from '$lib/assets/book.jpg';
	import rt from '$lib/assets/return.svg';
	import shi from '$lib/assets/share_icon.svg';
	import share from '$lib/assets/export.png';
	import li from '$lib/assets/likeicon2.png';

	let data = {
		title: '이렇게 유용한 정보를 알수있다니!!!',
		value:
			'헌법재판소의 장은 국회의 동의를 얻어 재판관중에서 대통령이 임명한다. 국회는 국민의 보통·평등·직접·비밀선거에 의하여 선출된 국회의원으로 구성한다. 대통령은 법률이 정하는 바에 의하여 사면·감형 또는 복권을 명할 수 있다. 정당은 법률이 정하는 바에 의하여 국가의 보호를 받으며, 국가는 법률이 정하는 바에 의하여 정당운영에 필요한 자금을 보조할 수 있다. 언론·출판에 대한 허가나 검열과 집회·결사에 대한 허가는 인정되지 아니한다. 대한민국의 주권은 국민에게 있고, 모든 권력은 국민으로부터 나온다. 대통령은 국무총리·국무위원·행정각부의 장 기타 법률이 정하는 공사의 직을 겸할 수 없다.'
	};
	let showShare = 0;
</script>

<div class="container">
	<nav>
		<a href="/home">
			<img src={rt} alt="return" />
		</a>
		<button
			on:click={() => {
				showShare = 1;
				console.log(showShare);
			}}
		>
			<img src={shi} alt="share" />
		</button>
	</nav>
	<div class="main">
		<img src={book} alt="" />
		<div class="main-title">
			<p class="title">{data.title}</p>
			<button>
				<img src={li} alt="">
			</button>
		</div>
		<p class="content">{data.value}</p>
	</div>
</div>
{#if showShare == 1}
	<div class="share">
		<button
			on:click={() => {
				showShare = 0;
				console.log(showShare);
			}}
		>
			<img src={share} alt="" />
		</button>
	</div>
{/if}

<style scoped>
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

	.main {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		color: var(--white);
	}

	.main img {
		height: 15rem;
		object-fit: cover;
		border-radius: 10px;
	}

	.main .title {
		font-size: var(--big);
		font-weight: var(--hard);
		word-break: keep-all;
	}

	.main .content {
		font-size: var(--sml);
		font-weight: var(--regu);
		word-break: keep-all;
		line-height: 150%;
	}

	.main button {
		background: none;
		border: none;
		height: 2rem;
	}

	.main button img {
		height: 2rem;
	}

	.main-title {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
</style>
