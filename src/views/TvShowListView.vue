<template>
    <div class="container">
        <div class="text-white size-18 weight-800 mrtb-8">Shows</div>
        <div class="row">
            <template v-if="tvShowList.length > 0">
                <div class="col-lg-3 mrb-20" v-for="tvShow in tvShowList" :key="tvShow.id">
                    <router-link :to="`/tv/${tvShow.id}`">
                        <TvShow :tvShow="tvShow" />
                    </router-link>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import TvShowService from '../services/TvShowService.js';
import TvShow from '../components/TvShow.vue'
export default {
    name: 'TvShowListView',
    components: {
        TvShow
    },
    data: function () {
        return {
            originalTvShowList: [],
            tvShowList: [],
            search: this.$route.query.search
        }
    },
    created: function () {
        if (this.search != null) {
            this.performSearch();
        }
        TvShowService.getTvShowList().then((data) => {
            this.tvShowList = [...data]
            this.originalTvShowList = [...data]
        })
    },

    watch: {
        '$route.query.search': {
            handler: function (newVal, oldVal) {
                if (newVal != oldVal) {
                    this.search = this.$route.query.search
                    this.performSearch();
                }
            },
            immediate: true
        }
    },
    methods: {
        performSearch() {
            if (this.search ==='' || this.search === undefined) {
                if(this.$route.query.search !==undefined){
                    this.$router.replace('/');
                    this.tvShowList = this.originalTvShowList;
                }
                
               
            } else {
                 TvShowService.searchTvShow(this.search).then((data) => {
                    this.tvShowList = [...data.map((item) => item.show)]
                })
            }
        }
    }

}
</script>

<style>
</style>