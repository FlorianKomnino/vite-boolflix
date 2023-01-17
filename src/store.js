import { reactive } from 'vue';

export const store = reactive({
    moviesList: [],
    seriesList: [],
    stringToSearch: "",
    movieToSearch: "",
    serieToSearch: "",

    flagsArray: [
        "en",
        "es",
        "fr",
        "it",
        "ja",
    ],

    basePathForPosters: "https://image.tmdb.org/t/p/w342/",

    isResearchActive: false,
})