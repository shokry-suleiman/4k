<template>
	<div id="app" class="bg-dark">
		<AppHeader />
		<router-view />
	</div>
</template>
<script>
import AppHeader from'./components/AppHeader.vue'
export default {
	name: 'app',
	components:{
		AppHeader
	},
	data: function () {
		return {

		}
	},
}
</script>
<style>
</style>
