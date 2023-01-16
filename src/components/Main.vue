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
            userInputMovies: "",
            userInputSeries: "",

        }
    },

    methods: {
        getMovies(searchedMovie) {
            this.store.movieToSearch = searchedMovie;
            axios.get(this.apiUriMovies, {
                params: {
                    api_key: this.apiKey,
                    query: this.store.movieToSearch,
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

        getSeries(searchedSerie) {
            this.store.serieToSearch = searchedSerie;
            axios.get(this.apiUriSeries, {
                params: {
                    api_key: this.apiKey,
                    query: this.store.serieToSearch,
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

            <div class="col12">
                <h1>
                    BoolFlix
                </h1>
            </div>

            <div class="col12">
                <label for="inputForMovies">Cerca un film</label>
                <input type="text" id="inputForMovies" class="text" v-model="userInputMovies">
                <div class="btn btn-primary" @click="getMovies(userInputMovies), getSeries(userInputSeries)">
                    Search
                </div>
            </div>

            <div class="col12">
                <label for="inputForSeries">Cerca una serie TV</label>
                <input type="text" id="inputForSeries" class="text" v-model="userInputSeries">
                <div class="btn btn-primary" @click="getSeries(userInputSeries)">
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
                            <img :src="getImagePath(`../assets/imgs/flags/${movie.original_language}.svg`)" alt="">
                        </figure>
                        <br>
                        {{ movie.original_language }}
                        <br>
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
                            <img :src="getImagePath(`../assets/imgs/flags/${serie.original_language}.svg`)" alt="">
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
</style>
