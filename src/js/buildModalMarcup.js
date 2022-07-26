export function openModalMovie(data) {
  const {
    vote_average,
    vote_count,
    genres,
    original_title,
    title,
    poster_path,
    original_name,
    popularity,
    overview,
    id,
  } = data;

  const popularityToString = Math.round(popularity.toString());

  const modalGenres =
    genres
      .map(genre => genre.name)
      .slice(0, 2)
      .join(', ') + ', Other';

  return `<img class="img-modal" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" data-id=${id} />
        <div class="container-modal">
          <b class="title-modal">${title}</b>
          <table class="table">
            <tr class="table-separator">
              <th class="table__text">Vote / Votes</th>
              <th><span class="vote-average">${vote_average}</span> / <span class="vote-count">${vote_count}</span></th>
            </tr>
            <tr class="table-separator">
              <th class="table__text">Popularity</th>
              <th>${popularityToString}</th>
            </tr>
            <tr class="table-separator">
              <th class="table__text">Original Title</th>
              <th>${original_title ? original_title : original_name}</th>
            </tr>
            <tr class="table-separator">
              <th class="table__text">Genre</th>
              <th>${modalGenres}</th>
            </tr>
          </table>
          <b class="title-about__modal">ABOUT</b>
          <p class="about-text__modal about-scrollbar">${overview}
          </p>
        </div>
      </div>
    </div>`;
}
