<script>
	import '$lib/style/style.css';
	import lg from '$lib/assets/logo.svg';
	import ui from '$lib/assets/userimg.svg';
	import si from '$lib/assets/search_icon.svg';
	import sp from '$lib/assets/sample.png';
	import sb from '$lib/assets/samplebg.png';
	import li from '$lib/assets/likeicon.png';

	import flower from '$lib/assets/flower.jpg';
	import chips from '$lib/assets/chips.jpg';
	import phone from '$lib/assets/phone.jpg';
	import book from '$lib/assets/book.jpg';
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
		await supabase
			.from('searchList')
			.select()
			.eq('userName', nickname)
			.order('id', { ascending: false })
			.limit(10)
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

	let recent = [{ id: 0, userName: '0', goodsID: 0, imageURL: lg }];
	let today = [
		{ text: '꽃가루 알레르기, 음식도 조심하세요!', img: flower },
		{ text: '제품에 사진이 있으면 진짜, 그림이면 향만 첨가!?!', img: chips },
		{ text: '오늘의 정보!! 신기하다 신기해', img: phone },
		{ text: '이렇게 유용한 정보를 알수있다니!!!', img: book }
	];
	let query = '';
</script>

<div class="container">
	<nav>
		<img src={lg} alt="logo" class="logo" />
		<a href="/home/user">
			<img src={ui} alt="user" class="user" />
		</a>
	</nav>
	<div class="main">
		<div class="search-input-container">
			<form action="/home/search" method="GET" class="search-input-form">
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
		<div class="recent-search">
			<div class="header">
				<p class="label">최근 검색</p>
				<a href="/home/search/recent" class="more">더보기 &gt;</a>
			</div>
			<div class="list">
				{#if recent}
					{#each recent as { goodsID, imageURL }, i}
						<a class="item" href="/home/search/result/{goodsID}">
							<img src={imageURL} alt="sample" class="goodsImage" />
							<!-- 얘 크기랑 모양 조정좀 -->
						</a>
					{/each}
				{/if}
			</div>
		</div>
		<div class="today-info">
			<div class="header">
				<p class="label">오늘의 정보</p>
				<a href="/home/today" class="more">더보기 &gt;</a>
			</div>
			<div class="list">
				{#each today as { text, img }, i}
					<a class="item" href="/home/today/post{i + 1}">
						<img src={img} alt="sample" class="sample" />
						<div class="desc">
							<p>{text}</p>
							<button>
								<img src={li} alt="" />
							</button>
						</div>
					</a>
				{/each}
			</div>
		</div>
		<a class="primary-button scan" href="/home/scan">스캔하기</a>
	</div>
</div>

<style scoped>
	nav .logo {
		height: 1.5rem;
	}

	nav .user {
		border-radius: 50%;
	}

	.recent-search {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.recent-search .list {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 1rem;
		overflow: scroll;
		overflow-y: hidden;
		height: 5rem;
	}

	.recent-search .list::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera*/
	}

	.recent-search .list .item {
		height: 100%;
		background-color: var(--white);
		border-radius: 10px;
	}

	.recent-search .list .item img {
		height: 100%;
	}

	.today-info {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.today-info .list {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 1rem;
		overflow: scroll;
		overflow-y: hidden;
		height: 15rem;
	}

	.today-info .list::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera*/
	}

	.today-info .list .item {
		height: 100%;
		background-color: var(--gray242);
		border-radius: 10px;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.today-info .list .item .sample {
		height: 10rem;
		width: 10rem;
		object-fit: cover;
		border-radius: 10px;
	}

	.today-info .list .item .desc {
		display: flex;
		flex-direction: row;
		width: 100%;
	}

	.desc p {
		font-size: var(--xxsml);
		font-weight: var(--regu);
		word-break: keep-all;
		color: var(--white);
		width: fit-content;
	}

	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: baseline;
	}

	.label {
		font-size: var(--mid);
		font-weight: var(--semi);
		color: var(--white);
	}

	.more {
		font-size: var(--xxsml);
		font-weight: var(--regu);
		color: var(--yellow);
	}

	.scan {
		margin-top: auto;
	}

	.goodsImage {
		height: 5rem;
		width: 5rem;
		object-fit: cover;
		border-radius: 10px;
	}

	.desc button {
		background: none;
		border: none;
	}

	.desc button img {
		height: 1rem;
	}
</style>
