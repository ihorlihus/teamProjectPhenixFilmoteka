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
            // genres,
            vote_average,
            
        }) => {
            
            console.log(localGenres);
            // let genres = localGenres.map(({ name }) => name).join(', ')
            // if (genres) {
            //     console.log(genres);
            //     // localGenres
            //     //     // .filter(({ id }) => genre_ids.includes(id))
            //     //     .map(({ name }) => name)
            //     //     .join(', ');
            // }

            return `
                <li>
                    <a>
                        <img src='https://image.tmdb.org/t/p/w500${poster_path}'/>
                        <p>${title || name}</p>
                        <div>
                            <p>${genre_ids}</p>
                            <p>${(release_date || first_air_date).slice(0, 4)}</p>
                            <span>${vote_average}</span>
                        </div>
                    </a>
                </li>
            `
            }).join('');
}

