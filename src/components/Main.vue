<script>
import axios from 'axios';
import { store } from "../store.js";

export default {
    data() {
        return {
            store,
            apiUri: "https://api.themoviedb.org/3/search/movie",
            apiKey: "4b169a37522866656c0ab921628fb40d",
            userInput: "",

        }
    },

    methods: {
        getMovies(searchedString) {
            this.store.stringToSearch = searchedString;
            axios.get(this.apiUri, {
                params: {
                    api_key: this.apiKey,
                    query: this.store.stringToSearch,
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
                <input type="text" class="text" v-model="userInput">
                <div class="btn btn-primary" @click="getMovies(userInput)">
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
                            {{ movie.original_language }}
                            <br>
                            {{ movie.vote_average }}
                        </p>

                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "bootstrap" as *;
</style>
