<script>
	import lg from '$lib/assets/logo.svg';
	import ui from '$lib/assets/userimg.svg';
	import si from '$lib/assets/search_icon.svg';
	import sp from '$lib/assets/sample.png';
	import sb from '$lib/assets/samplebg.png';
    import li from '$lib/assets/likeicon.svg';

	let recent = [{ i: 1 }, { i: 1 }, { i: 1 }, { i: 1 }, { i: 1 }, { i: 1 }];
	let today = [
		{ text: '꽃가루 알레르기, 음식도 조심하세요!' },
		{ text: '제품에 사진이 있으면 진짜, 그림이면 향만 첨가!?!' },
		{ text: '꽃가루 알레르기, 음식도 조심하세요!' },
		{ text: '제품에 사진이 있으면 진짜, 그림이면 향만 첨가!?!' },
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
				<input type="text" name="search" id="search" class="search-input" placeholder="search" bind:value={query} />
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
				{#each recent as i}
					<a class="item" href="/home/search/result">
						<img src={sp} alt="sample" />
					</a>
				{/each}
			</div>
		</div>
		<div class="today-info">
			<div class="header">
				<p class="label">오늘의 정보</p>
				<a href="/home/today" class="more">더보기 &gt;</a>
			</div>
			<div class="list">
				{#each today as {text}, i}
					<a class="item" href="/home/today/post">
						<img src={sb} alt="sample" />
						<div class="desc">
                            <p>{text}</p>
                            <button>
                                <img src={li} alt="like">
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
        padding: 0.5rem;
    }

    .today-info .list .item img {
        height: 80%;
    }

    .today-info .list .item .desc {
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 0.5rem;
    }

    .desc p {
        font-size: var(--xxsml);
        font-weight: var(--regu);
        word-break: keep-all;
        color: var(--white);
        width: fit-content;
    }

    .desc button {
        border: none;
        background: none;
        background-color: none;
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
</style>
