<script>
	import '$lib/style/style.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import rt from '$lib/assets/return.svg';
	import shi from '$lib/assets/share_icon.svg';

	let prdlstReportNo = $page.params.slug;

	/**
	 * @type {any}
	 */
	let list = [];

	/**
	 * @type {any}
	 */
	let item = {};

	onMount(() => {
		/**
		 * @param {any} input
		 */
		async function getResult(input) {
			let result;
			await fetch(
				`https://apis.data.go.kr/B553748/CertImgListServiceV3/getCertImgListServiceV3?serviceKey=I6j8ftZVndEWKbhSsmcwF%2FEBEDj0WJVOA7EBUtK46S8ro4LjwzywS326Q2PqYYasxppLCtv5XBHLm08TRnCpPw%3D%3D&prdlstReportNo=${input}&returnType=json&pageNo=1&numOfRows=10`
			)
				.then((res) => res.json())
				.then((res) => (result = res.body.items));
			// await console.log(result);
			return result;
		}
		getResult(prdlstReportNo).then((res) => {
			list = res;
			item = list[0].item;
			console.log(item);
		});
	});
</script>

<div class="container">
	<nav>
		<a href="/home">
			<img src={rt} alt="return" />
		</a>
		<button>
			<img src={shi} alt="share" />
		</button>
	</nav>
	<div class="main">
		{#if item.imgurl1}
			<img src={item.imgurl1} alt="img" />
		{:else}
			<img src={item.imgurl2} alt="img" />
		{/if}
		<p class="prdNm">{item.prdlstNm}</p>
		<div class="list">
			<p class="title">원재료명</p>
			<div class="rawmtrl content">{item.rawmtrl}</div>
		</div>
		<div class="list">
			<p class="title">영양성분</p>
			<div class="nutrient content">{item.nutrient}</div>
		</div>
	</div>
</div>

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
		padding: 1rem 0;
		gap: 1rem;
	}

	.main img {
		border-radius: 10px;
	}

	.main .prdNm {
		font-size: var(--xbig);
		font-weight: var(--hard);
		color: var(--white);
	}

	.main .list {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		gap: 1rem;
	}

	.main .title {
		color: var(--yellow);
		font-size: var(--sml);
		font-weight: var(--semi);
		word-break: keep-all;
	}

	.main .content {
		color: var(--white);
		font-size: var(--sml);
		font-weight: var(--regu);
		word-break: keep-all;
        letter-spacing: 0.05rem;
	}
</style>
