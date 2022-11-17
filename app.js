/* Imports */

import { fetchCars, fetchMovies } from './fetch-utils.js';
import { renderCar, renderMovie } from './render-utils.js';

/* Get DOM Elements */
const moviesContainer = document.getElementById('movies-container');
const carsContainer = document.getElementById('cars-container');
/* State */

/* Events */

window.addEventListener('load', async () => {
    const movies = await fetchMovies();

    for (let movie of movies) {
        const movieEL = renderMovie(movie);
        moviesContainer.append(movieEL);
    }
});

window.addEventListener('load', async () => {
    const cars = await fetchCars();
    console.log(cars);

    for (let car of cars) {
        const carEl = renderCar(car);
        carsContainer.append(carEl);
    }
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
