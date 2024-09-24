<head>
	<title>유저 정보</title>
</head>

<script>
	import { myStore } from '$lib/store';
	import rt from '$lib/assets/return.svg';
    import userimg from '$lib/assets/userimg.svg';

	let nickname = '';
	myStore.subscribe((value) => {
		console.log([value.nickname, '1']);
		nickname = value.nickname;
	});
</script>

<div class="container">
	<nav>
		<a href="/home">
			<img src={rt} alt="return" />
		</a>
		<p>내 정보</p>
		<button></button>
	</nav>
    <div class="user">
        <p class="welcome">{nickname} 님,<br/>안녕하세요?</p>
        <img src={userimg} alt="user">
    </div>
    <div class="goallergy-con">
        <a class="goallergy" href="/home/user/select">알레르기 정보 수정</a>
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

    .user {
        padding: 2rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .user img {
        border-radius: 50%;
        height: 5rem;
    }

    .welcome {
        font-size: var(--mid);
        font-weight: var(--regu);
        color: var(--white);
    }

    .goallergy-con {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
    }

    .goallergy {
        border: 1px solid var(--gray50);
        color: var(--gray50);
        padding: 0.5rem 2rem;
        border-radius: 10px;
    }
</style>
