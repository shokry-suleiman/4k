<template>
	<div class="container">
		<div class="row mrtb-8">
			<div class="col-md-3">
				<img :src="tvShow.image?.original" alt="" class="max-300">
			</div>
			<div class="col-md-9">
				<div class="text-white size-28 weight-600">
					{{ tvShow.name }}
				</div>
				<div class="text-white size-6 weight-400" v-html="tvShow?.summary"></div>

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
					<TvShowRate :rate="tvShow?.rating?.average"/> 
					<div class="d-inline-block text-white size-6 weight-700 mrs-4 pt-2">{{tvShow?.rating?.average}}</div>

				</div>
			</div>
		</div>

		<div class="row mrtb-20">
			<div class="col-md-2 mrb-6" v-for="season in seasons" :key="season.id">
				<TvShowSeason :season="season"/>
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
			seasons: []

		}
	},
	created: function () {
		TvShowService.getTvShowSeasons(this.id).then((data) => {
			this.tvShow = { ...data }
			this.seasons = [ ...data._embedded.seasons]
		}),

		TvShowService.getSearch().subscribe((res) =>{
			// this.$router.replace('/')
			TvShowService
            console.log('resxx',res)

        })
	}
}
</script>
