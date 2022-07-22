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

  const popularityToString = popularity.toString();

  return `<img class="img-modal" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="" data-id=${id} />
        <div class="container-modal">
          <h1 class="title-modal">${title}</h1>
          <table class="table">
            <tr class="table-separator">
              <th class="table__text">Vote / Votes</th>
              <th><span class="vote-average">${vote_average}</span> / <span class="vote-count">${vote_count}</span></th>
            </tr>
            <tr class="table-separator">
              <th class="table__text">Popularity</th>
              <th>${popularityToString.slice(0, 5)}</th>
            </tr>
            <tr class="table-separator">
              <th class="table__text">Original Title</th>
              <th>${original_title ? original_title : original_name}</th>
            </tr>
            <tr class="table-separator">
              <th class="table__text">Genre</th>
              <th>${
                genres ? genres.map(genre => genre.name).slice(0, 2) : ' '
              }</th>
            </tr>
          </table>
          <h2 class="title-about__modal">ABOUT</h2>
          <p class="about-text__modal">${overview}
          </p>
        </div>
      </div>
    </div>`;
}
