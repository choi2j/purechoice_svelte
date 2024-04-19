<script>
	import '$lib/style/style.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import rt from '$lib/assets/return.svg';
	import shi from '$lib/assets/share_icon.svg';
	import { myStore } from '$lib/store';
	import { supabase } from '$lib/supabaseClient';

	let prdlstReportNo = $page.params.slug;
	/**
	 * @type {string}
	 */
	let nickname;
	let danger;
	myStore.subscribe((value) => {
		console.log([value.nickname, '1']);
		nickname = value.nickname;
	});
	
	async function record() {
		console.log(nickname);
		const { error } = await supabase
			.from('searchList')
			.insert({ userName: nickname, goodsID: prdlstReportNo });
		if (error) console.log(error);
	}
	record();

	/**
	 * @type {any}
	 */
	let list = [];

	/**
	 * @type {any}
	 */
	let item = {};
	/**
	 * @type {any}
	 */
	let rawmtrl = [];
	/**
	 * @type {any}
	 */
	$: rawmtrlOb = [];
	/**
	 * @type {any}
	 */
	let nutrient = [];
	/**
	 * @type {any}
	 */
	let allergy = [];
	/**
	 * @type {any}
	 */
	$: allergyOb = [];

	/**
	 * @type {any}
	 */
	let userAllergy = [];

	async function compare() {
		await supabase.from('allergyList').select('allergys').eq('name', nickname)
		.then((res) => {
			// @ts-ignore
			userAllergy = res.data[0].allergys.allergys;
			console.log(userAllergy);
		});
	}

	onMount(async () => {
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
		compare().then(() => {
			getResult(prdlstReportNo).then((res) => {
				list = res;
				item = list[0].item;
				console.log(item);
				rawmtrl = item.rawmtrl.split(',');
				nutrient = item.nutrient.split(',');
				allergy = item.allergy.split(',');
				console.log('raw', rawmtrl);
				console.log('nutr', nutrient);
				console.log('alle', allergy);

				let yes = true;

				for (let i = 0; i < rawmtrl.length; i++) {
					for (let j = 0; j < userAllergy.length; j++) {
						if (rawmtrl[i].includes(userAllergy[j])) {
							rawmtrlOb.push({
								text: rawmtrl[i],
								color: 'yellow'
							});
							yes = false;
							break;
						}
					}
					if (!yes) {
						continue;
					} else {
						rawmtrlOb.push({
							text: rawmtrl[i],
							color: 'white'
						});
					}
					console.log(yes);
				}
				rawmtrlOb = rawmtrlOb;

				for (let i = 0; i < allergy.length; i++) {
					for (let j = 0; j < userAllergy.length; j++) {
						if (allergy[i].includes(userAllergy[j])) {
							allergyOb.push({
								text: allergy[i],
								color: 'yellow'
							});
							yes = false;
							break;
						}
					}
					if (!yes) {
						continue;
					} else {
						allergyOb.push({
							text: allergy[i],
							color: 'white'
						});
					}
					console.log(yes);
				}
				allergyOb = allergyOb;
				console.log(yes, 'fin');

				console.log(rawmtrlOb);
				console.log(allergyOb);
				// @ts-ignore
				let { error } = supabase.from('searchList').update({canEat: yes}).eq('goodsID', prdlstReportNo).eq('userName', nickname).then(() => {
					console.log('asdf');
					if (error) console.log(error);
				});
			});
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
			<div class="rawmtrl content">
				{#each rawmtrlOb as item, i}
					{#if item.color == 'yellow'}
						<p class="backY">{item.text}</p>
					{:else}
						<p>{item.text}</p>
					{/if}
					{#if i == rawmtrlOb.length - 1}
						&nbsp;
					{:else}
						&#44;&nbsp;
					{/if}
				{/each}
			</div>
		</div>
		<div class="list">
			<p class="title">알레르기</p>
			<div class="allergy content">
				{#each allergyOb as item, i}
					{#if item.color == 'yellow'}
						<p class="backY">{item.text}</p>
					{:else}
						<p>{item.text}</p>
					{/if}
					{#if i == allergyOb.length - 1}
						&nbsp;
					{:else}
						&#44;&nbsp;
					{/if}
				{/each}
			</div>
		</div>
		<div class="list">
			<p class="title">영양성분</p>
			<div class="nutrient content">
				{#each nutrient as item, i}
					<p>{item}</p>
					{#if i == nutrient.length - 1}
						&nbsp;
					{:else}
						&#44;&nbsp;
					{/if}
				{/each}
			</div>
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
		display: flex;
		flex-wrap: wrap;
	}

	.nutrient {
		margin-bottom: 3rem;
	}

	.content p {
		width: fit-content;
		display: inline;
	}

	.backY {
		background-color: var(--yellow);
		font-weight: var(--semi);
		color: var(--black);
	}
</style>
