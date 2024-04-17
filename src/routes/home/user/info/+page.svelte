<head>
	<title>알레르기 정보</title>
</head>

<script>
	import '$lib/style/style.css';
	import si from '$lib/assets/search_icon.svg';
	import rt from '$lib/assets/return.svg';

	let tag = '';
	let tagInfo = [
		{
			icon: si,
			name: '계란',
			status: 'inactive'
		},
		{
			icon: si,
			name: '우유',
			status: 'inactive'
		},
		{
			icon: si,
			name: '메밀',
			status: 'inactive'
		},
		{
			icon: si,
			name: '땅콩',
			status: 'inactive'
		},
		{
			icon: si,
			name: '대두',
			status: 'inactive'
		},
		{
			icon: si,
			name: '밀',
			status: 'inactive'
		},
		{
			icon: si,
			name: '잣',
			status: 'inactive'
		},
		{
			icon: si,
			name: '호두',
			status: 'inactive'
		},
		{
			icon: si,
			name: '게',
			status: 'inactive'
		},
		{
			icon: si,
			name: '새우',
			status: 'inactive'
		},
		{
			icon: si,
			name: '오징어',
			status: 'inactive'
		},
		{
			icon: si,
			name: '고등어',
			status: 'inactive'
		},
		{
			icon: si,
			name: '조개류',
			status: 'inactive'
		},
		{
			icon: si,
			name: '복숭아',
			status: 'inactive'
		},
		{
			icon: si,
			name: '토마토',
			status: 'inactive'
		},
		{
			icon: si,
			name: '닭고기',
			status: 'inactive'
		},
		{
			icon: si,
			name: '돼지고기',
			status: 'inactive'
		},
		{
			icon: si,
			name: '쇠고기',
			status: 'inactive'
		},
		{
			icon: si,
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
	function convert() {
		allergyList = Array.from(allergy);
		console.log(allergyList);
	}
</script>

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
</style>
