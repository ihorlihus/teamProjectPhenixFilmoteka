import { saveGenres } from './createMovieCard';
import { localGenres } from './createMovieCard';
import listGenres from './genres.json';

export const createMovieCard = movies => {
  return movies
    .map(
      ({
        poster_path,
        title,
        name,
        release_date,
        first_air_date,
        id,
        vote_average,
      }) => {
        let moviesGenres;

        let moviesGenresFindName = listGenres.genres.map(({ name }) => name);

        if (moviesGenresFindName.length <= 2) {
          moviesGenres = moviesGenresFindName.join(', ');
        } else {
          moviesGenres =
            moviesGenresFindName.slice(0, 2).join(', ') + ', Other';
        }
        const voteAverageToString = vote_average.toString();
        return `
                <li class="card__item" data-id="${id}">
                    <a class="card card__link" data-id="${id}">
                        <img class="card__img" data-id="${id}" src='https://image.tmdb.org/t/p/w500${poster_path}' alt='${
          title || name
        }' loading="lazy"/>
                        <p class="card__title" data-id="${id}">${
          title || name
        }</p>
                        <div class="card__inform" data-id="${id}">
                            <p class="card__genres">${moviesGenres}</p>
                            <p class="card__date">
                              <span></span>|
                            ${(release_date || first_air_date).slice(0, 4)}</p>
                            <span class="card__vote visually-hidden">${voteAverageToString.slice(
                              0,
                              3
                            )}</span>
                        </div>
                    </a>
                </li>
            `;
      }
    )
    .join('');
};
