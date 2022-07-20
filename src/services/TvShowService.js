import axios from 'axios';

export default {

    getTvShowList() {
        return axios.get( process.env.VUE_APP_BACKEND_URL +'shows').then((response) => {
            return response.data;
        });
    },
    
    getTvShowSeasons(id) {
        return axios.get( process.env.VUE_APP_BACKEND_URL +'shows/' + id + '?embed=seasons').then((response) => {
            return response.data;
        });
    },

    searchTvShow(key) {
        return axios.get( process.env.VUE_APP_BACKEND_URL +'search/shows?q=' + key).then((response) => {
            return response.data;
        });
    }
};