<template>
	<div
		class="d-flex flex-column flex-lg-row align-items-center justify-content-center w-100 cursor-pointer position-relative h-100 preview">
		<img :src="season.image.medium" alt="" class="w-100" v-defaultImage>
		<div class="overlay flex-column pse-10 ptb-10 d-none d-lg-flex">
			<div class="d-flex align-items-center justify-content-between mt-auto">
				<div class="text-white size-14 weight-700 mt-auto">
					Season {{ season.number }}
				</div>
			</div>
		</div>
		<div class="text-white size-8 weight-700 mrt-4 d-lg-none">
			Season {{ season.number }}
		</div>
	</div>
</template>
<script>
export default {
	name: 'TvShowSeason',
	props: ['season']
}
</script>

<style scoped>
.caption {
	top: 45%;
	left: 0;
	width: 100%;
	opacity: 0;
	transition: transparent .8s ease-in, opacity .8s ease-in;
}

.preview:hover .caption {

	opacity: 1;
	transition: transparent .8s ease-in, opacity .8s ease-in;
}

.preview:hover .overlay {

	opacity: 1;
	transition: transparent .8s ease-in, opacity .8s ease-in;
}

.overlay {
	background-color: rgba(0, 0, 0, 0.7);
	position: absolute;
	height: 100%;
	top: 0;
	width: 100%;
	opacity: 0;
	-webkit-transition: background-color 0.25s ease-in, opacity 0.25s ease-in;
	transition: background-color 0.25s ease-in, opacity 0.25s ease-in;
}

.star {
	max-width: 15px;
}
</style>
