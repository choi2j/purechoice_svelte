<script>
	import { myStore } from "$lib/store";

let nickname;
myStore.subscribe(value => {
    console.log([value.nickname, '1'])
    nickname = value.nickname;
})
</script>

<div class="container">
</div>

