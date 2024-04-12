<script>
	import lg from '$lib/assets/logo.svg';
	import ui from '$lib/assets/userimg.svg';
	import si from '$lib/assets/search_icon.svg';
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
            <form action="" method="GET" class="search-input-form">
                <input type="text" name="search" id="search" class="search-input" />
                <button type="submit">
                    <img src={si} alt="search" />
                </button>
            </form>
        </div>
    </div>
</div>

<style scoped>
	nav .logo {
		height: 1.5rem;
	}

	nav .user {
		border-radius: 50%;
	}
</style>
