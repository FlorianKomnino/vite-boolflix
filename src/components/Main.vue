<script>
import axios from 'axios';
import { store } from "../store.js";

export default {
    data() {
        return {
            store,
            apiUriMovies: "https://api.themoviedb.org/3/search/movie",
            apiUriSeries: "https://api.themoviedb.org/3/search/tv",
            apiKey: "4b169a37522866656c0ab921628fb40d",
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
        getMovies() {
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
        },

        getSeries() {
            axios.get(this.apiUriSeries, {
                params: {
                    api_key: this.apiKey,
                    query: this.userInput,
                }
            })
                .then((response) => {
                    console.log(response);
                    this.store.seriesList = response.data.results;
                })
                .catch(function (error) {
                    console.log(error);
                })
        },

        getImagePath: function (imgPath) {
            console.log(imgPath);
            return new URL(imgPath, import.meta.url).href;
        },

        getSeriesAndMoviesWithCheck() {
            this.getMovies()
            this.getSeries()
        },

        isFlagWorking() {
            return "flag for this language not found";
        },

    },

    created() {
    }
}
</script>

<template>
    <div class="container">
        <div class="row">

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

            <div class="col-12">
                <ul>
                    <li v-for="movie in store.moviesList">
                        <h1>
                            {{ movie.title }}
                        </h1>
                        <h2>
                            {{ movie.original_title }}
                        </h2>
                        <p>
                        <figure class="flagImg">
                            <img v-if="flagsArray.includes(movie.original_language)"
                                :src="getImagePath(`../assets/imgs/flags/${movie.original_language}.svg`)"
                                alt="flag for this language not found">
                            <p class="alterantiveTextToFlag" v-else>
                                Flag not found. Language: {{ movie.original_language }}
                            </p>
                        </figure>
                        {{ movie.vote_average }}
                        </p>
                    </li>

                    <li v-for="serie in store.seriesList">
                        <h1>
                            {{ serie.name }}
                        </h1>
                        <h2>
                            {{ serie.original_name }}
                        </h2>
                        <p>
                        <figure class="flagImg">
                            <img v-if="getImagePath(`../assets/imgs/flags/${serie.original_language}.svg`)"
                                :src="getImagePath(`../assets/imgs/flags/${serie.original_language}.svg`)" alt="">
                            <p v-else>
                                The language is: {{ serie.original_language }}
                            </p>
                        </figure>
                        <br>
                        {{ serie.original_language }}
                        <br>
                        {{ serie.vote_average }}
                        </p>
                    </li>
                </ul>
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
