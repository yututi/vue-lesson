<template>
	<h3>Day1</h3>
	<LessonList :lessons="lessonsDay1" />
	<h3>Day2</h3>
	<LessonList :lessons="lessonsDay2" />
	<h3>Day3</h3>
	<LessonList :lessons="lessonsDay3" />
	<h3>Day4</h3>
	<LessonList :lessons="lessonsDay4" />
</template>
<script>
import LessonList from "../components/LessonList.vue"

const filterByDay = day => lesson => lesson.meta.day === day

export default {
	components: {
		LessonList
	},
	data () {
		return {
			lessons: []
		}
	},
	computed: {
		lessonsDay1 () {
			return this.lessons.filter(filterByDay(1))
		},
		lessonsDay2 () {
			return this.lessons.filter(filterByDay(2))
		},
		lessonsDay3 () {
			return this.lessons.filter(filterByDay(3))
		},
		lessonsDay4 () {
			return this.lessons.filter(filterByDay(4))
		}
	},
	mounted () {
		this.lessons = this.$router.getRoutes().filter(route => route.meta.isLesson)
	}
}
</script>

<style>
</style>
