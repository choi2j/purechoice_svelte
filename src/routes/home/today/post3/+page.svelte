<script>
	import '$lib/style/style.css';
	import phone from '$lib/assets/phone.jpg';
	import rt from '$lib/assets/return.svg';
	import shi from '$lib/assets/share_icon.svg';
	import li from '$lib/assets/likeicon.png';

	import share from '$lib/assets/export.png';

	let data = {
		title: '오늘의 정보!! 신기하다 신기해',
		value:
			'퓨어초이스 시제품 예시입니다 퓨어초이스 시제품 예시입니다 있을 것 같았다. 그건 실로 벅찬 감격이었다.고마워요 본드. 덕분에 마음이 아주 편해졌어요.고마워할 필요는 없어.킴은 미소지으며 손을 내밀었다. 니콜라는 기쁜 얼굴로 악수를 리를 질렀다. 이건....정말 상황 파악이 느린 녀석이로군. 네가 지금 어디에 퓨어초이스 시제품 예시입니다 알기나 하는 거야 어리광을 받아주는 것도 여기까지다. 어서 이름이나 말해 어디서 감히 퓨어초이스 시제품 예시입니다 지르나 천한 입구가 녹슬어 엉겨붙은 문을 열어 부지내를 마차가 퓨어초이스 시제품 예시입니다 저택으로 향하는 길만은 어떻게든 풀사리도 되어 있는 것 같지만 퓨어초이스 시제품 예시입니다 그것을 조금이라도 빗나가면자 거칠어지는 대로의 풀숲뿐만. 그런 은 1.16.1 퓨어초이스 시제품 예시입니다 같이 놀아요.토니 박태환 님. 조나단의 상처는 싸이월드에도 있답니다. 저는 싸이월드에서 도토리 2개를 갖고 있거든요. 1부 조나단의 상처 퓨어초이스 시제품 예시입니다 소년이여 퓨어초이스 시제품 예시입니다이 되라.로딩 님. 출석 체크 했습니다. 를 위해서라도 사랑의빵 님을 그만 보아주세요. 장난기 어린 의 말에 휴스턴은 멍해져 있다가 크게 퓨어초이스 시제품 예시입니다 터트렸다. 귀족들이나 퓨어초이스 시제품 예시입니다 황족들은 어 웃음을 는 것은 였다. 하잖아. 어차피 그들이 우리를 데려가지 못한다고 해도 처벌받거나 하는 퓨어초이스 시제품 예시입니다 없습니다. 엘프들은 서로를 처벌한다는 것에 익숙하지 못하니까요. 그래도. 어정쩡한 블리자드의 대꾸에 퓨어초이스 시제품 예시입니다 잠시 머리에 손을'
	};
	let showShare = 0;
</script>

<div class="container">
	<nav>
		<a href="/home">
			<img src={rt} alt="return" />
		</a>
		<button
			on:click={() => {
				showShare = 1;
				console.log(showShare);
			}}
		>
			<img src={shi} alt="share" />
		</button>
	</nav>
	<div class="main">
		<img src={phone} alt="" />
		<p class="title">{data.title}</p>
		<p class="content">{data.value}</p>
	</div>
</div>
{#if showShare == 1}
	<div class="share">
		<button
			on:click={() => {
				showShare = 0;
				console.log(showShare);
			}}
		>
			<img src={share} alt="" />
		</button>
	</div>
{/if}

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
		gap: 1rem;
		color: var(--white);
	}

	.main img {
		height: 15rem;
		object-fit: cover;
		border-radius: 10px;
	}

	.main .title {
		font-size: var(--big);
		font-weight: var(--hard);
		word-break: keep-all;
	}

	.main .content {
		font-size: var(--sml);
		font-weight: var(--regu);
		word-break: keep-all;
		line-height: 150%;
	}
</style>
