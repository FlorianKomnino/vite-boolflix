<script>
import axios from 'axios';
import { store } from "../store.js";

import Main from './Main.vue';

export default {
    components: {
        Main,
    },
    data() {
        return {
            store,
            userInput: "",
            apiUriMovies: "https://api.themoviedb.org/3/search/movie",
            apiUriSeries: "https://api.themoviedb.org/3/search/tv",
            apiKey: "4b169a37522866656c0ab921628fb40d",
            userInput: "",
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
        getMovies() {
            if (this.store.isResearchActive) {
                this.store.moviesList = [];
                this.store.isResearchActive = false;
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
            this.store.isResearchActive = true;
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
                this.isResearchActive = false;
                this.store.seriesList = [];
                this.store.moviesList = [];
            } else {
                this.getMovies()
                this.getSeries()
            }
        },
    }
}


</script>

<template>

    <div class="col12">
        <h1>
            BoolFlix
        </h1>
    </div>

    <div class="col12">
        <label for="inputForMovies">Cerca un film</label>
        <input type="text" id="inputForMovies" class="text" v-model="userInput">
        <div class="btn btn-primary" @click="getSeriesAndMoviesWithCheck(userInput)">
            Search
        </div>
    </div>

    <Main />
</template>

<style lang="scss" scoped>
@use "bootstrap" as *;
</style>
