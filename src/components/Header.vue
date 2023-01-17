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
                this.store.isResearchActive = false;
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
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>
                    BoolFlix
                </h1>
            </div>

            <div class="col-12">
                <label for="inputForMovies">Cerca un film</label>
                <input type="text" id="inputForMovies" class="text" v-model="userInput">
                <div class="btn btn-primary" @click="getSeriesAndMoviesWithCheck(userInput)">
                    Search
                </div>
            </div>
        </div>
    </div>
    <Main />
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "bootstrap" as *;

h1 {
    width: 100%;
    padding: 1.25rem 0 1.25rem 1rem;
    font-weight: 600;
    font-size: 5rem;
    color: $boolflix_red;
}


div.container label {
    color: white;
    padding: 1rem;
}

div.container input {
    height: 35px;
}

div.col-12 div {
    margin: 1rem;
    width: 120px;
}
</style>
