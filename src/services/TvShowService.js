import axios from 'axios';
import { Subject } from 'rxjs';

const searchSubject = new Subject();

export default {

    search(val){
        return searchSubject.next(val);
    },

    getSearch(){
        return searchSubject.asObservable();
    },

    getTvShowList() {
        return axios.get( process.env.VUE_APP_BACKEND_URL +'shows').then((response) => {
            return response.data;
        });
    },
    
    getTvShow(id) {
        return axios.get( process.env.VUE_APP_BACKEND_URL +'shows/' + id).then((response) => {
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