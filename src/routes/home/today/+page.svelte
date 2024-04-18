<script>
	import rt from '$lib/assets/return.svg';
	import '$lib/style/style.css';
	import flower from '$lib/assets/flower.jpg';
	import phone from '$lib/assets/phone.jpg';
	import book from '$lib/assets/book.jpg';
	import chips from '$lib/assets/chips.jpg';

	let post = [
		{
			img: flower,
			title: '꽃가루 알레르기 음식도 조심하세요!'
		},
		{
			img: chips,
			title: '제품에 사진이 있으면 진짜 그림이면 향만 첨가!?!'
		},
		{
			img: phone,
			title: '오늘의 정보!! 신기하다 신기해'
		},
		{
			img: book,
			title: '이렇게 유용한 정보를 알수있다니!!!'
		},
		{
			img: flower,
			title: '꽃가루 알레르기 음식도 조심하세요!'
		},
		{
			img: chips,
			title: '제품에 사진이 있으면 진짜 그림이면 향만 첨가!?!'
		},
		{
			img: phone,
			title: '오늘의 정보!! 신기하다 신기해'
		},
		{
			img: book,
			title: '이렇게 유용한 정보를 알수있다니!!!'
		},
	];
</script>

<div class="container">
	<nav>
		<a href="/home">
			<img src={rt} alt="return" />
		</a>
		<p>오늘의 정보</p>
		<button></button>
	</nav>
	<div class="today">
		{#each post as { img, title }, i}
			<a href="/home/today/post{i + 1}" class="post">
				<img src={img} alt="" />
				<p>{title}</p>
			</a>
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

	.today {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		padding-bottom: 5rem;
	}

	.post {
		width: calc(50% - 0.5rem);
		background-color: var(--gray242);
		color: var(--white);
		padding: 0.8rem;
        border-radius: 10px;
	}

	.post img {
		height: 8rem;
		width: 100%;
		object-fit: cover;
        border-radius: 10px;
	}

	.post p {
		margin-top: auto;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		font-size: var(--xsml);
	}
</style>
