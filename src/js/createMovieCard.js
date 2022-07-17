import "./fetchGenres";



const createMovieCard = (movies) => {
    return movies.map( 
        ({
            poster_path,
            title,
            name,
            release_date,
            first_air_date,
            genre_ids,
            vote_average,
            
        }) => {
            let moviesGenres;
            if (genre_ids.length <= 3) {
                moviesGenres = localGenres
                    .filter(({ id }) => genre_ids.includes(id))
                    .map(({ name }) => name)
                    .join(', ');
            } else {
                const moreMoviesGenres = localGenres
                    .slice(0, 2)
                    .filter(({ id }) => genre_ids.includes(id))
                    .map(({ name }) => name)
                    .join(', ');
                moviesGenres = moreMoviesGenres + ' Other';
            }
                
            
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
                        <img src='https://image.tmdb.org/t/p/w500${poster_path}' alt='${title || name}' loading="lazy"/>
                        <p>${title || name}</p>
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

