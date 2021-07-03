<template>
  <input type="text" v-model="inputText">
  <div>↓ここでcomputedを表示しましょう</div>
</template>
<script>
export default {
	data: function () {
		return {
			inputText: ""
		}
	},
	computed: {
		changeTextCapitalize: function () {
			// TODO 入力された文字列を大文字にする処理を書きましょう
			return null
		}
	}
}
</script>

<style>
</style>
