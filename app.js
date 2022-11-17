/* Imports */

import { fetchMovies } from './fetch-utils.js';
import { renderMovie } from './render-utils.js';

/* Get DOM Elements */
const moviesContainer = document.getElementById('movies-container');

/* State */

/* Events */

window.addEventListener('load', async () => {
    const movies = await fetchMovies();

    for (let movie of movies) {
        const movieEL = renderMovie(movie);
        moviesContainer.append(movieEL);
    }
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
