<script>
	import '$lib/style/style.css';
	import si from '$lib/assets/search_icon.svg';
	import rt from '$lib/assets/return.svg';

	import egg from '$lib/assets/allergy/1.png';
	import milk from '$lib/assets/allergy/2.png';
	import barkwheat from '$lib/assets/allergy/3.png';
	import peanut from '$lib/assets/allergy/4.png';
	import bean from '$lib/assets/allergy/5.png';
	import wheat from '$lib/assets/allergy/6.png';
	import jat from '$lib/assets/allergy/7.png';
	import walnut from '$lib/assets/allergy/8.png';
	import crab from '$lib/assets/allergy/9.png';
	import shrimp from '$lib/assets/allergy/10.png';
	import squid from '$lib/assets/allergy/11.png';
	import fish from '$lib/assets/allergy/12.png';
	import clam from '$lib/assets/allergy/13.png';
	import peach from '$lib/assets/allergy/14.png';
	import tomato from '$lib/assets/allergy/15.png';
	import chicken from '$lib/assets/allergy/16.png';
	import pork from '$lib/assets/allergy/17.png';
	import beef from '$lib/assets/allergy/18.png';
	import ahwangsan from '$lib/assets/allergy/19.png';
	import { myStore } from '$lib/store';
	import { supabase } from '$lib/supabaseClient';

	let tag = '';
	let tagInfo = [
		{
			icon: egg,
			name: '계란',
			status: 'inactive'
		},
		{
			icon: milk,
			name: '우유',
			status: 'inactive'
		},
		{
			icon: barkwheat,
			name: '메밀',
			status: 'inactive'
		},
		{
			icon: peanut,
			name: '땅콩',
			status: 'inactive'
		},
		{
			icon: bean,
			name: '대두',
			status: 'inactive'
		},
		{
			icon: wheat,
			name: '밀',
			status: 'inactive'
		},
		{
			icon: jat,
			name: '잣',
			status: 'inactive'
		},
		{
			icon: walnut,
			name: '호두',
			status: 'inactive'
		},
		{
			icon: crab,
			name: '게',
			status: 'inactive'
		},
		{
			icon: shrimp,
			name: '새우',
			status: 'inactive'
		},
		{
			icon: squid,
			name: '오징어',
			status: 'inactive'
		},
		{
			icon: fish,
			name: '고등어',
			status: 'inactive'
		},
		{
			icon: clam,
			name: '조개류',
			status: 'inactive'
		},
		{
			icon: peach,
			name: '복숭아',
			status: 'inactive'
		},
		{
			icon: tomato,
			name: '토마토',
			status: 'inactive'
		},
		{
			icon: chicken,
			name: '닭고기',
			status: 'inactive'
		},
		{
			icon: pork,
			name: '돼지고기',
			status: 'inactive'
		},
		{
			icon: beef,
			name: '쇠고기',
			status: 'inactive'
		},
		{
			icon: ahwangsan,
			name: '아황산류',
			status: 'inactive'
		}
	];

	// @ts-ignore
	let allergy = new Set();

	// @ts-ignore
	function addAllergy(name, i) {
		if (tagInfo[i].status == 'inactive') {
			tagInfo[i].status = 'active';
			allergy.add(name);
		} else {
			tagInfo[i].status = 'inactive';
			// @ts-ignore
			allergy.delete(name);
		}
		// @ts-ignore
		console.log(allergy);
	}

	//@ts-ignore
	let allergyList;
	/**
	 * @type {string}
	 */
	let nickname;
	myStore.subscribe(value => {
		console.log([value.nickname, '1'])
		nickname = value.nickname;
	})
	async function convert() {
		allergyList = Array.from(allergy);
		console.log(allergyList);
		let altojson = {"allergys": allergyList};
		await supabase.from('allergyList').update({ allergys: altojson}).eq('name', nickname);
	}
</script>

<head>
	<title>알레르기 정보</title>
</head>

<div class="container">
	<nav>
		<a href="/home">
			<img src={rt} alt="return" />
		</a>
	</nav>
	<div class="search-input-form">
		<input
			type="text"
			name="search"
			id="search"
			class="search-input"
			placeholder="search"
			bind:value={tag}
		/>
		<button type="submit">
			<img src={si} alt="search" />
		</button>
	</div>
	<div class="tags">
		{#each tagInfo as { icon, name, status }, i}
			{#if status == 'inactive'}
				<button
					class="tag"
					on:click={() => {
						addAllergy(name, i);
					}}
				>
					<img class="tag-icon" src={icon} alt="icon" />
					<p class="tag-name">{name}</p>
				</button>
			{:else}
				<button
					class="tag active"
					on:click={() => {
						addAllergy(name, i);
					}}
				>
					<img class="tag-icon" src={icon} alt="icon" />
					<p class="tag-name">{name}</p>
				</button>
			{/if}
		{/each}
	</div>
	<a class="primary-button" on:click={convert} href="/home">수정하기</a>
</div>

<style scoped>
	.container {
		gap: 1rem;
	}

	nav a {
		color: var(--white);
	}

	nav a img {
		height: 1rem;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		padding-bottom: 5rem;
	}

	.tag {
		height: 10rem;
		width: calc(50% - 0.5rem);
		border: 2px solid var(--gray200);
		background: none;
		color: var(--white);
		padding: 0.3rem;
	}

	.tag img {
		height: 7rem;
	}

	.tag p {
		margin-top: auto;
	}

	.active {
		border: 2px solid var(--yellow);
		color: var(--yellow);
	}

	.primary-button {
		position: fixed;
		bottom: 0;
		margin-bottom: 1.75rem;
		width: calc(100% - 1.75rem * 2);
	}
	
	.tag img {
		width: 7rem;
		height: 7rem;
		object-fit: contain;
	}
</style>
