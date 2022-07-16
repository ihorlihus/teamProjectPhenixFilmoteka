export const createMovieCard = (movies) => {
    return movies.map(movie => 
        `
        <a>
            <img src='https://image.tmdb.org/t/p/w500${movie.poster_path}' width='394'/>
            <p>${movie.title || movie.name}</p>
            <p>${movie.genre_ids}</p>
            <p>${movie.vote_average}</p>
            <p>${movie.release_date || movie.first_air_date}</p>
        </a>
    `
    ).join('');
}