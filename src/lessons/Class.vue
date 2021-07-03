<template>
  <!-- sampleクラスをあててみよう -->
  <p>test text</p>
	<!-- ボタンをクリックしたときにis-redクラスが設定されるようにしてみよう -->
	<button>ボタン</button>
</template>
<script>
export default {
	data () {
		return {
			classes: {
				sample: true
			}
		}
	}
}
</script>

<style>
.sample {
	color: blue;
	font-size: 200px;
}
.sample.is-red {
	color: red;
}
</style>
