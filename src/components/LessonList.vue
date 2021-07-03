<template>
	<ul v-if="lessons.length > 0">
		<li v-for="lesson in lessons" :key="lesson.path" >
			<router-link :to="lesson.path">
				{{lesson.name}}
			</router-link>
		</li>
	</ul>
	<h5 v-else>課題はありません</h5>
</template>
<script>
export default {
	props: {
		lessons: { type: Array, default: () => [] }
	}
}
</script>

<style>
</style>
