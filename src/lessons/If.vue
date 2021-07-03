<template>
	<p>ボタンを奇数回押したら、このテキストが消えるようにしてみよう</p>
	<p>ボタンを偶数回押したら、このテキストが消えるようにしてみよう</p>
	<!-- ※v-if、v-showの両方を試して、違いを確認しておこう -->
	<button>ボタン</button>
</template>
<script>
export default {
	data () {
		return {
		}
	},
	methods: {
		buttonClicked () {
		}
	}
}
</script>

<style>
</style>
