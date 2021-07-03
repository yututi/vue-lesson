<template>
	<div> clickした時にtestMethodが発火するようにしよう</div>
	<button>
	method button
	</button>
</template>
<script>
export default {
	methods: {
		testMethod: function () {
			alert("testMethodが呼び出されました")
		}
	}
}
</script>

<style>
</style>
