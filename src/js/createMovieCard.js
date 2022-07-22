import { localGenres } from './fetchGenres';

export const createMovieCard = movies => {
  return movies
    .map(
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
          .map(({ name }) => name);

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
                            <p class="card__genres" data-id="${id}">${moviesGenres}</p>
                            <p class="card__date" data-id="${id}">
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
