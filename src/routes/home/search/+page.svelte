<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import '$lib/style/style.css';

	import rt from '$lib/assets/return.svg';
	import shi from '$lib/assets/share_icon.svg';
	import si from '$lib/assets/search_icon.svg';
	import { searchQuery } from '$lib/store';

	//@ts-ignore
	export let data;

	let query = data.query;

	/**
	 * @type {any}
	 */
	let list = [];

	/**
	 * @param {any} input
	 */
	async function getResult(input) {
		let result;
		await fetch(
			`https://apis.data.go.kr/B553748/CertImgListServiceV3/getCertImgListServiceV3?serviceKey=I6j8ftZVndEWKbhSsmcwF%2FEBEDj0WJVOA7EBUtK46S8ro4LjwzywS326Q2PqYYasxppLCtv5XBHLm08TRnCpPw%3D%3D&prdlstNm=${input}&returnType=json&pageNo=1&numOfRows=10`
		)
			.then((res) => res.json())
			.then((res) => (result = res.body.items));
		return result;
	}

	function block(input) {
		getResult(input).then((res) => {
			list = res;
		});
		return false;
	}


	onMount(() => {
		block(query);
	});

	searchQuery.subscribe((v) => {
		console.log('query change');
		block(query);
	})
	// tst
</script>

<div class="container">
	<nav>
		<a href="/home">
			<img src={rt} alt="return" />
		</a>
	</nav>
	<div class="main">
		<div class="search-input-container">
			<form action="/home/search" method="GET" class="search-input-form" on:submit={searchQuery.set(query)}>
				<input
					type="text"
					name="search"
					id="search"
					class="search-input"
					placeholder="search"
					bind:value={query}
				/>
				<button type="submit">
					<img src={si} alt="search" />
				</button>
			</form>
		</div>
		<ul>
			{#each list as item, i}
				<li>
					<a href="search/result/{item.item.prdlstReportNo}">
						{#if item.item.imgurl1}
							<img src={item.item.imgurl1} alt="img" />
						{:else}
							<img src={item.item.imgurl2} alt="img" />
						{/if}
						<p>{item.item.prdlstNm}</p>
					</a>
				</li>
			{:else}
				<div></div>
			{/each}
		</ul>
	</div>
</div>

<style scoped>
	nav a {
		color: var(--white);
	}

	nav a img {
		height: 1rem;
	}

	nav button img {
		height: 1.3rem;
	}

	ul {
		list-style-type: none;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	ul li {
		width: 100%;
		padding: 1rem;
		background-color: var(--gray242);
		border-radius: 10px;
	}

	ul li a {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	ul li img {
		width: 100%;
		border-radius: 10px;
	}
</style>
