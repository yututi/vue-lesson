<template>
	<header>
		<span class="title">{{$route.name}}</span>
		<div class="spacer"></div>
		<span v-if="$route.meta.isLesson" class="src">対象: src/{{$route.meta.path}}</span>
	</header>
	<div class="page">
		<router-view/>
	</div>
</template>
<style>
html, body, #app {
	margin: 0px;
	padding: 0px;
	height: 100%;
}
body {
	font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","メイリオ","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
}
* {
	box-sizing: border-box;
}
header {
	margin: 0px;
	padding: 4px 12px;
	font-size: 28px;
	display: flex;
	color: white;
	background-color: #03bd94;
	box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);
}
.spacer {
	flex: 1;
}
#app {
	display: flex;
	flex-direction: column;
}
.page {
	padding: 24px;
	height: 100%;
	flex: 1;
}
</style>
