import { createRouter, createWebHistory } from "vue-router"
import Index from "../views/Index.vue"

const routes = [
	{
		path: "/",
		name: "演習問題一覧",
		component: Index
	},
	{
		path: "/list",
		name: "v-forの使い方",
		meta: {
			isLesson: true,
			day: 3,
			path: "lessons/List.vue"
		},
		component: () => import("../lessons/List.vue")
	},
	{
		path: "/class",
		name: "クラスの動的な変更",
		meta: {
			isLesson: true,
			day: 2,
			path: "lessons/Class.vue"
		},
		component: () => import("../lessons/Class.vue")
	},
	{
		path: "/computed",
		name: "computedの使い方",
		meta: {
			isLesson: true,
			day: 2,
			path: "lessons/Computed.vue"
		},
		component: () => import("../lessons/Computed.vue")
	},
	{
		path: "/data",
		name: "dataの使い方",
		meta: {
			isLesson: true,
			day: 2,
			path: "lessons/Data.vue"
		},
		component: () => import("../lessons/Data.vue")
	},
	{
		path: "/method",
		name: "methodの使い方",
		meta: {
			isLesson: true,
			day: 3,
			path: "lessons/Method.vue"
		},
		component: () => import("../lessons/Method.vue")
	},
	{
		path: "/model",
		name: "v-modelの使い方",
		meta: {
			isLesson: true,
			day: 3,
			path: "lessons/Model.vue"
		},
		component: () => import("../lessons/Model.vue")
	},
	{
		path: "/style",
		name: "styleの動的な変更",
		meta: {
			isLesson: true,
			day: 2,
			path: "lessons/Style.vue"
		},
		component: () => import("../lessons/Style.vue")
	},
	{
		path: "/if",
		name: "v-if, v-showの使い方",
		meta: {
			isLesson: true,
			day: 2,
			path: "lessons/If.vue"
		},
		component: () => import("../lessons/If.vue")
	},
	{
		path: "/component",
		name: "子コンポーネントの使い方",
		meta: {
			isLesson: true,
			day: 3,
			path: "lessons/Component.vue"
		},
		component: () => import("../lessons/Component.vue")
	},
	{
		path: "/ref",
		name: "refの使い方",
		meta: {
			isLesson: true,
			day: 3,
			path: "lessons/Ref.vue"
		},
		component: () => import("../lessons/Ref.vue")
	},
	{
		path: "/event",
		name: "イベントハンドリング",
		meta: {
			isLesson: true,
			day: 3,
			path: "lessons/Event.vue"
		},
		component: () => import("../lessons/Event.vue")
	},
	{
		path: "/practice1",
		name: "演習問題",
		meta: {
			isLesson: true,
			day: 4,
			path: "lessons/Practice1.vue"
		},
		component: () => import("../lessons/Practice1.vue")
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
