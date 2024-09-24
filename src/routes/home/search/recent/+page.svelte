<script>
	import '$lib/style/style.css';
	import rt from '$lib/assets/return.svg';
	import lg from '$lib/assets/logo.svg';

	import { supabase } from '$lib/supabaseClient';
	import { myStore } from '$lib/store';

	/**
	 * @type {string}
	 */
	let nickname;
	myStore.subscribe((value) => {
		console.log([value.nickname, '1']);
		nickname = value.nickname;
	});
	async function getRecent() {
		// @ts-ignore
		let { error } = await supabase
			.from('searchList')
			.select()
			.eq('userName', nickname)
			.order('id', { ascending: false })
			.then(async (res) => {
				// @ts-ignore
				recent = res.data;
				console.log(recent);
				for (let i = 0; i < recent.length; i++) {
					let result;
					await fetch(
						`https://apis.data.go.kr/B553748/CertImgListServiceV3/getCertImgListServiceV3?serviceKey=I6j8ftZVndEWKbhSsmcwF%2FEBEDj0WJVOA7EBUtK46S8ro4LjwzywS326Q2PqYYasxppLCtv5XBHLm08TRnCpPw%3D%3D&prdlstReportNo=${recent[i].goodsID}&returnType=json&pageNo=1&numOfRows=10`
					)
						.then((res) => res.json())
						.then((res) => {
							result = res.body.items;
							console.log(result);
							if (result[0] !== undefined) recent[i].imageURL = result[0].item.imgurl1;
						});
				}
			});
	}

	getRecent();

	let recent = [{ id: 0, userName: '0', goodsID: 0, imageURL: lg, canEat: true }];

	let select = true;

	function changeSelection() {
		if (!select) select = true;
		else select = false;
	}
</script>

<div class="container">
	<nav>
		<a href="/home">
			<img src={rt} alt="return" />
		</a>
		<p>최근 검색 기록</p>
		<button></button>
	</nav>
	<div class="selection">
		{#if !select}
			<button on:click={changeSelection}>O</button>
			<button on:click={changeSelection} class="active">X</button>
            {:else}
			<button on:click={changeSelection} class="active">O</button>
			<button on:click={changeSelection}>X</button>
		{/if}
	</div>
	<div class="recent">
		{#each recent as { goodsID, imageURL, canEat }, i}
			{#if select == canEat}
				<a class="item" href="/home/search/result/{goodsID}">
					<img src={imageURL} alt="sample" class="goodsImage" />
				</a>
			{/if}
		{/each}
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

	nav p {
		color: var(--white);
	}

	.recent {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 1rem;
		gap: 1rem;
		padding-bottom: 3rem;
	}

	.goodsImage {
		height: 5rem;
		width: 5rem;
		object-fit: cover;
		border-radius: 10px;
	}

	.selection {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1rem;
	}

	.selection button {
		width: 100%;
		padding: 0.8rem;
		font-size: var(--big);
		border-radius: 10px;
		border: 1px solid var(--white);
		background: none;
		color: var(--white);
	}

	.selection .active {
		background-color: var(--yellow);
		border: 1px solid var(--yellow);
		color: var(--black);
	}
</style>
