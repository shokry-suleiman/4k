<template>
	<div class="container">
		<div class="row mrtb-8">

			<div class="col-md-4 col-xl-3 d-flex align-items-center justify-content-center">
				<img :src="tvShow.image?.original" alt="" class="max-300 max-md-240 max-lg-280 ma-xl-300 w-100"
					v-defaultImage>
			</div>

			<div class="col-md-8 col-xl-9">
				<div class="text-white size-20 size-md-28 weight-600 mrt-10 mrt-md-0">
					{{ tvShow.name }}
				</div>
				<div class="text-white size-6 weight-400">
					<span v-if="!readMoreActivated" v-html="tvShow?.summary?.slice(0, 200)"
						class="d-inline-block"></span>
					<a class="more d-block" v-if="!readMoreActivated" @click="readMoreActivated = true" href="#">
						Read more...
					</a>
					<span v-if="readMoreActivated" v-html="tvShow?.summary"></span>
				</div>

				<div class="d-flex align-items-center">
					<div class="text-white size-6 weight-700 mre-4">Schedule:</div>
					<div class="d-inline-block mre-4 text-white size-4 weight-400"
						v-for="(day, index) in tvShow?.schedule?.days" :key="index">
						{{ day }}
					</div>
					<div class="d-inline-block mre-4 text-white size-4 weight-400">
						({{ tvShow?.schedule?.time }})
					</div>
				</div>

				<div class="d-flex align-items-center">
					<div class="text-white size-6 weight-700 mre-4">Status:</div>
					<div class="d-inline-block mre-4 text-white size-4 weight-400">
						{{ tvShow?.status }}
					</div>
				</div>

				<div class="d-flex align-items-center">
					<div class="text-white size-6 weight-700 mre-4">Show Type:</div>
					<div class="d-inline-block mre-4 text-white size-4 weight-400">
						{{ tvShow?.type }}
					</div>
				</div>

				<div class="d-flex align-items-center">
					<div class="text-white size-6 weight-700 mre-4">Genres:</div>
					<div class="d-inline-block mre-4 text-white size-4 weight-400"
						v-for="(genre, index) in tvShow?.genres" :key="index">
						{{ genre }}
					</div>
				</div>

				<div class="d-flex align-items-center">
					<div class="text-white size-6 weight-700 mre-4">Official site:</div>
					<div class="d-inline-block mre-4 text-white size-4 weight-400">
						{{ tvShow?.network?.officialSite }}
					</div>
				</div>

				<div class="d-flex align-items-center">
					<TvShowRate :rate="tvShow?.rating?.average" />
					<div class="d-inline-block text-white size-6 weight-700 mrs-4 pt-2">{{ tvShow?.rating?.average }}
					</div>
				</div>
			</div>
		</div>

		<div class="row mrtb-20">
			<div class="col-6 col-md-4 col-lg-4 col-xl-3 mrb-20" v-for="season in seasons" :key="season.id">
				<TvShowSeason :season="season" />
			</div>
		</div>
	</div>
</template>



<script>
import TvShowService from '../services/TvShowService.js';
import TvShowRate from '../components/TvShowRate.vue'
import TvShowSeason from '../components/TvShowSeason.vue'

export default {
	name: 'TvShowDetailsView',
	components: {
		TvShowRate,
		TvShowSeason
	},
	data: function () {
		return {
			id: this.$route.params.id,
			tvShow: {},
			seasons: [],
			readMoreActivated: false

		}
	},
	created: function () {
		TvShowService.getTvShowSeasons(this.id).then((data) => {
			this.tvShow = { ...data }
			this.seasons = [...data._embedded.seasons]
		})
	}
}
</script>

<style lang="scss">
.more {
	margin-top: -0.8rem;
	margin-bottom: 1rem;
}
</style>