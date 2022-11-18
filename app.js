/* Imports */

import { fetchAnimals, fetchAuthors, fetchCars, fetchMovies } from './fetch-utils.js';
import { renderAnimal, renderAuthor, renderCar, renderMovie } from './render-utils.js';

/* Get DOM Elements */
const moviesContainer = document.getElementById('movies-container');
const carsContainer = document.getElementById('cars-container');
const animalsContainer = document.getElementById('animals-container');
const authorsContainer = document.getElementById('authors-container');
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

window.addEventListener('load', async () => {
    const authors = await fetchAuthors();

    for (let author of authors) {
        const authorEl = renderAuthor(author);
        authorsContainer.append(authorEl);
    }
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
