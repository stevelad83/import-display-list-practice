export function renderMovie(movie) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const ul = document.createElement('ul');

    h2.textContent = movie.title;
    p.textContent = `${movie.title} is a ${movie.genre}`;
    console.log(movie.reviews);

    for (let review of movie.reviews) {
        const li = document.createElement('li');
        li.textContent = review;
        ul.append(li);
    }
    div.append(h2, p, ul);
    return div;
}
