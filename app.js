/* Imports */

import { fetchAnimals, fetchCars, fetchMovies } from './fetch-utils.js';
import { renderAnimal, renderCar, renderMovie } from './render-utils.js';

/* Get DOM Elements */
const moviesContainer = document.getElementById('movies-container');
const carsContainer = document.getElementById('cars-container');
const animalsContainer = document.getElementById('animals-container');
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

    for (let car of cars) {
        const carEl = renderCar(car);
        carsContainer.append(carEl);
    }
});

window.addEventListener('load', async () => {
    const animals = await fetchAnimals();

    for (let animal of animals) {
        const animalEl = renderAnimal(animal);
        animalsContainer.append(animalEl);
    }
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
