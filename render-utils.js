export function renderMovie(movie) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const ul = document.createElement('ul');

    h2.textContent = movie.title;
    p.textContent = `${movie.title} is a ${movie.genre}`;

    for (let review of movie.reviews) {
        const li = document.createElement('li');
        li.textContent = `Here are some reviews: ${movie.reviews}`;
        ul.append(li);
    }
    div.append(h2, p, ul);
    return div;
}

export function renderCar(car) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    h2.textContent = `${car.first_name} ${car.last_name}`;
    p.textContent = `Drives a ${car.car}`;

    div.append(h2, p);
    return div;
}

export function renderAnimal(animal) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    h2.textContent = animal.species;
    p.textContent = `Lives in ${animal.habitat} and eats ${animal.food}`;

    div.append(h2, p);
    return div;
}

export function renderAuthor(author) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    h2.textContent = `'${author.quote}'`;
    p.textContent = `Said by ${author.author} in ${author.year}`;

    div.append(h2, p);
    return div;
}
