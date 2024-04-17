<script>
	import '$lib/style/style.css';
	import si from '$lib/assets/search_icon.svg';
	import rt from '$lib/assets/return.svg';

	let tag = '';
	let tagInfo = [
		{
			icon: si,
			name: '계란'
		},
		{
			icon: si,
			name: '우유'
		},
		{
			icon: si,
			name: '메밀'
		},
		{
			icon: si,
			name: '땅콩'
		},
		{
			icon: si,
			name: '대두'
		},
		{
			icon: si,
			name: '밀'
		},
		{
			icon: si,
			name: '잣'
		},
		{
			icon: si,
			name: '호두'
		},
		{
			icon: si,
			name: '게'
		},
		{
			icon: si,
			name: '새우'
		},
		{
			icon: si,
			name: '오징어'
		},
		{
			icon: si,
			name: '고등어'
		},
		{
			icon: si,
			name: '조개류'
		},
		{
			icon: si,
			name: '복숭아'
		},
		{
			icon: si,
			name: '토마토'
		},
		{
			icon: si,
			name: '닭고기'
		},
		{
			icon: si,
			name: '돼지고기'
		},
		{
			icon: si,
			name: '쇠고기'
		},
		{
			icon: si,
			name: '아황산류'
		}
	];
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
		{#each tagInfo as { icon, name }}
			<button class="tag">
				<img class="tag-icon" src={icon} alt="icon" />
				<p class="tag-name">{name}</p>
			</button>
		{/each}
	</div>
	<a class="primary-button" href="/home"> 시작하기 </a>
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

	.primary-button {
		position: fixed;
		bottom: 0;
		margin-bottom: 1.75rem;
		width: calc(100% - 1.75rem * 2);
	}
</style>
