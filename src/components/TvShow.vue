<template>
	<div
		class="d-flex flex-column flex-lg-row align-items-center justify-content-center w-100 cursor-pointer position-relative preview h-100">
		<img :src="tvShow?.image?.medium" alt="" class="w-100" v-defaultImage>
		<div class="overlay flex-column pse-10 ptb-10 d-none d-lg-flex">
			<div class="d-flex align-items-center justify-content-between mt-auto">
				<div class="text-white size-14 weight-700 mt-auto">
					{{ tvShow?.name }}
				</div>
				<div class="d-flex align-items-center">
					<img src="../assets/icons/star.png" alt="" class="star mre-4">
					<div class="text-white size-6 weight-400">{{ tvShow?.rating?.average }}</div>
				</div>
			</div>
		</div>
		<div class="text-white size-8 weight-700 mrt-4 d-lg-none">
			{{ tvShow?.name }}
		</div>
		<div class="d-flex align-items-center d-lg-none">
			<img src="../assets/icons/star.png" alt="" class="star mre-4">
			<div class="text-white size-6 weight-400">{{ tvShow?.rating?.average }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TvShow',
	props: ['tvShow'],
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
