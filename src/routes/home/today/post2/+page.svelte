<script>
	import '$lib/style/style.css';
	import chips from '$lib/assets/chips.jpg';
	import rt from '$lib/assets/return.svg';
	import shi from '$lib/assets/share_icon.svg';
	import li from '$lib/assets/likeicon.png';
	import share from '$lib/assets/export.png';

	let data = {
		title: '제품에 사진이 있으면 진짜 그림이면 향만 첨가!?!',
		value:
			'제품에 사진이 들어가면 진짜 과일이, 그림이 들어가면 향료만 들어간다는 사실인지 가짜인지 모를 뇌피셜! 알고 계셨나요? 사실 전 모르고 있었어요! 이 문단은 사실 디자인 혹은 시제품용 더미-텍스트이기 때문에 내용의 길이만 중요하지 내용의 진위여부는 중요하지 않기 때문이랍니다. 그러니 여러분들도 앞으로 인터넷에 써있는 글이라고 해서 아무거나 막 믿지 말고 비판적인 사고를 바탕으로 하여 올바른 정보를 습득할 수 있는 선진 일류국가의 자랑스러운 문화시민이 되도록 노력하기 위해 최선을 다하는 것에 대한 의무를 인식하고 다하기 위해 노력하여야 하겠읍니다.'
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
		<img src={chips} alt="" />
		<p class="title">{data.title}</p>
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
</style>
