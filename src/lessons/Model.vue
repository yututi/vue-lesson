<template>
  <div>v-modelを使って入力した値がpタグに表示されるようにしよう</div>
  <input type="text">
  <p>
  {{ inputValue }}
  </p>
</template>
<script>
export default {
	data () {
		return {
			inputValue: ""
		}
	}
}
</script>

<style>
</style>
