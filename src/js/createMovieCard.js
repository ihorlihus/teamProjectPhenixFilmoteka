import {  localGenres } from "./fetchGenres";

export const createMovieCard = (movies) => {
    return movies.map( 
        ({
            poster_path,
            title,
            original_title,
            name,
            release_date,
            first_air_date,
            genre_ids,
            genres,
            vote_average,
            
        }) => {
            console.log(localGenres.length);
            let filmGenres;
            if (genres) {
                filmGenres = genres.map(({ name }) => name).join(', ');
            }
            else if (genre_ids.length <= 3) {
                filmGenres = localGenres
                    .filter(({ id }) => genre_ids.includes(id))
                    .map(({ name }) => name)
                    .join(', ');
                
            }
            else if (genre_ids.length >= 4) {
                
                const morefilmGenres = localGenres
                    .slice(0, 2)
                    .filter(({ id }) => genre_ids.includes(id))
                    .map(({ name }) => name)
                    .join(', ');
                filmGenres = morefilmGenres + ' Other';
            }
            return `
                <li>
                    <a>
                        <img src='https://image.tmdb.org/t/p/w500${poster_path}' alt='${original_title}'/>
                        <p>${title || name}</p>
                        <div>
                            <p>${filmGenres}</p>
                            <p>${(release_date || first_air_date).slice(0, 4)}</p>
                            <span>${vote_average}</span>
                        </div>
                    </a>
                </li>
            `
    }).join('');
}

