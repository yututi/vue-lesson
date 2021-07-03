<template>
  <p>child component. text is {{text || "undefined..."}}</p>
</template>
<script>
export default {
	props: {
		text: { type: String }
	}
}
</script>

<style>
</style>
