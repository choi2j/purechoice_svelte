<script>
	import '$lib/style/style.css';
	import flower from '$lib/assets/flower.jpg';
	import rt from '$lib/assets/return.svg';
	import shi from '$lib/assets/share_icon.svg';
	import li from '$lib/assets/likeicon.png';
	import share from '$lib/assets/export.png';

	let data = {
		title: '꽃가루 알레르기 음식도 조심하세요!',
		value:
			'꽃가루 알레르기가 있으면 음식도 조심해야한다!?!? 조심하세요 여러분 꽃가루 알레르기가 있으면 음식도 조심해야한다!?!? 조심하세요 여러분 꽃가루 알레르기가 있으면 음식도 조심해야한다!?!? 조심하세요 여러분 꽃가루 알레르기가 있으면 음식도 조심해야한다!?!? 조심하세요 여러분 꽃가루 알레르기가 있으면 음식도 조심해야한다!?!? 조심하세요 여러분 꽃가루 알레르기가 있으면 음식도 조심해야한다!?!? 조심하세요 여러분 꽃가루 알레르기가 있으면 음식도 조심해야한다!?!? 조심하세요 여러분 꽃가루 알레르기가 있으면 음식도 조심해야한다!?!? 조심하세요 여러분 꽃가루 알레르기가 있으면 음식도 조심해야한다!?!? 조심하세요 여러분 꽃가루 알레르기가 있으면 음식도 조심해야한다!?!? 조심하세요 여러분'
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
		<img src={flower} alt="" />
		<p class="title">{data.title}</p>
		<button>
			<img src="" alt="">
		</button>
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
		gap: 2rem;
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
		font-size: var(--xsml);
		font-weight: var(--regu);
		word-break: keep-all;
		line-height: 150%;
	}
</style>
