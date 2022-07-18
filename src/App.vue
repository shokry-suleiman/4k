<template>
	<div id="app" class="bg-dark">
		<TvHeader />
		<router-view />
	</div>
</template>
<script>
import TvHeader from'./components/TvHeader.vue'
export default {
	name: 'app',
	components:{
		TvHeader
	},
	data: function () {
		return {

		}
	},
}
</script>
<style>
</style>
