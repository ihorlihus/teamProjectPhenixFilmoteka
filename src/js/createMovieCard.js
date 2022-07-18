import {  localGenres } from "./fetchGenres";

export const createMovieCard = (movies) => {
    return movies.map( 
        ({
            poster_path,
            title,
            name,
            release_date,
            first_air_date,
            genre_ids,
            id,
            vote_average,
            
        }) => {
            let moviesGenres;

            let moviesGenresFindName = localGenres
                .filter(({ id }) => genre_ids.includes(id))
                .map(({ name }) => name)

            if (moviesGenresFindName.length <= 2) {
                moviesGenres = moviesGenresFindName.join(', ')
            } else {
                moviesGenres = moviesGenresFindName.slice(0, 2).join(', ') + ', Other';
            }

            return `
                <li data-id="${id}">
                    <a data-id="${id}">
                        <img data-id="${id}" src='https://image.tmdb.org/t/p/w500${poster_path}' alt='${title || name}' loading="lazy"/>
                        <p data-id="${id}">${title || name}</p>
                        <div>
                            <p>${moviesGenres}</p>
                            <p>${(release_date || first_air_date).slice(0, 4)}</p>
                            <span>${vote_average}</span>
                        </div>
                    </a>
                </li>
            `
            }).join('');
}

