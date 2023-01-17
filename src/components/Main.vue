<script>
import axios from 'axios';
import { store } from "../store.js";

import CardComponent from './CardComponent.vue';

export default {
    name: "Main",

    components: {
        CardComponent,
    },

    data() {
        return {
            store,
            apiUriMovies: "https://api.themoviedb.org/3/search/movie",
            apiUriSeries: "https://api.themoviedb.org/3/search/tv",
            apiKey: "4b169a37522866656c0ab921628fb40d",
            basePathForPosters: "https://image.tmdb.org/t/p/w342/",
            userInput: "",
            userInputMovies: "",
            userInputSeries: "",
            flagsArray: [
                "en",
                "es",
                "ja",
                "it",
                "fr",
            ],

        }
    },

    methods: {

        /*
        getMovies() {
            if (store.isResearchActive) {
                this.store.moviesList = [];
                store.isResearchActive = false;
            } else {
                axios.get(this.apiUriMovies, {
                    params: {
                        api_key: this.apiKey,
                        query: this.userInput,
                    }
                })
                    .then((response) => {
                        console.log(response.data.results);
                        this.store.moviesList = response.data.results;
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }
        },

        getSeries() {
            store.isResearchActive = true;
            axios.get(this.apiUriSeries, {
                params: {
                    api_key: this.apiKey,
                    query: this.userInput,
                }
            })
                .then((response) => {
                    console.log(response.data.results);
                    this.store.seriesList = response.data.results;
                })
                .catch(function (error) {
                    console.log(error);
                })
        },

        getSeriesAndMoviesWithCheck() {
            if (this.userInput.length === 0) {
                store.isResearchActive = false;
                this.store.seriesList = [];
                this.store.moviesList = [];
            } else {
                this.getMovies()
                this.getSeries()
            }
        },
*/
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href;
        },

    },

    created() {
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 v-if="store.isResearchActive">
                    Movies
                </h1>

                <CardComponent v-for="movie in store.moviesList" :endOfPosterPath="movie.poster_path"
                    :title="movie.title" :originalTitle="movie.original_title"
                    :originalLanguage="movie.original_language" :voteAverage="movie.vote_average" />

                <h1 v-if="store.isResearchActive">
                    Series
                </h1>

                <CardComponent v-for="serie in store.seriesList" :endOfPosterPath="serie.poster_path"
                    :title="serie.name" :originalTitle="serie.name" :originalLanguage="serie.original_language"
                    :voteAverage="serie.vote_average" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "bootstrap" as *;

figure.flagImg {
    width: 40px;
    height: 30px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border: 2px solid black;
    }
}

p.alterantiveTextToFlag {
    width: 250px;
}
</style>
