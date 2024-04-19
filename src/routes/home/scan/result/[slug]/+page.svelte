<script>
	import '$lib/style/style.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import rt from '$lib/assets/return.svg';
	import shi from '$lib/assets/share_icon.svg';
	import { myStore } from '$lib/store';
	import { supabase } from '$lib/supabaseClient';

	let barcode = $page.params.slug;

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
	let prod = {};

	/**
	 * @type {any}
	 */
	let prodlist = [];

	/**
	 * @type {any}
	 */
	let rawmtrl = [];
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
	$: rawmtrlOb = [];

	/**
	 * @type {any}
	 */
	let userAllergy = [];
	/**
	 * @type {any}
	 */
	$: allergyOb = [];
	/**
	 * @type {string}
	 */
	let nickname;
	myStore.subscribe((value) => {
		console.log([value.nickname, '1']);
		nickname = value.nickname;
	});

	async function compare() {
		await supabase.from('allergyList').select('allergys').eq('name', nickname)
		.then((res) => {
			// @ts-ignore
			userAllergy = res.data[0].allergys.allergys;
			console.log(userAllergy);
		});
	}
	compare();

	onMount(() => {
		/**
		 * @type {string}
		 */
		let nickname;
		myStore.subscribe((value) => {
			console.log([value.nickname, '1']);
			nickname = value.nickname;
		});

		console.log(barcode);
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
			return result;
		}

		// @ts-ignore
		async function getProd(input) {
			// @ts-ignore
			let result;
			await fetch(
				`https://openapi.foodsafetykorea.go.kr/api/ed811a8ebe974a4cbf1f/I2570/json/1/5/BRCD_NO=${input}`
			)
				.then((res) => res.json())
				.then((res) => (result = res.I2570.row));
			return result;
		}

		getProd(barcode)
			.then((res) => {
				prodlist = res;
				console.log(prodlist[0], 1);
				prod = prodlist[0].PRDLST_REPORT_NO;
				console.log(prod);
				if (prodlist !== undefined) {
					async function record() {
						console.log(nickname);
						const { error } = await supabase
							.from('searchList')
							.insert({ userName: nickname, goodsID: prod });
						if (error) console.log(error);
					}
					record();
				}
			})
			.then((res) => {
				getResult(prod).then((res2) => {
					console.log(res2, 0);
					list = res2;
					item = list[0].item;
					console.log(item);
					rawmtrl = item.rawmtrl.split(',');
					nutrient = item.nutrient.split(' ');
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
					}
					allergyOb = allergyOb;
					// @ts-ignore
					let { error } = supabase.from('searchList').update({canEat: yes}).eq('goodsID', prod).then(() => {
						console.log('asdf');
						if (error) console.log(error);
					});
				});
			});
	});

	// 예시 데이터 8801111904704 : 마이쮸 딸기맛
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
				{#each rawmtrl as rawmtrl}
					<p>{rawmtrl},</p>
				{/each}
			</div>
		</div>
		<div class="list">
			<p class="title">알레르기</p>
			<div class="allergy content">
				{#each allergy as allergy}
					<p>{allergy}</p>
				{/each}
			</div>
		</div>
		<div class="list">
			<p class="title">영양성분</p>
			<div class="nutrient content">
				{#each nutrient as nutrient}
					<p>{nutrient}</p>
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
	}

	.nutrient {
		margin-bottom: 3rem;
	}

	.content p {
		width: fit-content;
		display: inline;
	}
</style>
