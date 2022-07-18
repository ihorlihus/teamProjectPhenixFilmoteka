import '../sass/test.scss';

const list = document.querySelector('.film_list');
const modal = document.querySelector('.backdrop');
const watchButton = document.querySelector('.js-watch');
const queueButton = document.querySelector('.js-queue');
queryApi();
//  фетч -----------
async function queryApi() {
  await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=deeaaa6f7bb1ec2c1571c017660b3676`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(response => {
      const results = response.results;
      return showGallery(results);
    })
    .catch(Error => console.log(Error));
}
// показ галереї
async function showGallery(results) {
  list.innerHTML = await renderGallery(results);
}
// рендер галереї
function renderGallery(results) {
  return results
    .map(({ original_title, backdrop_path, id }) => {
      return `<a class="link_card" href="" data-id="${id}"><div class="photo-card" width="100px">
             <img class="photo-card-image" src="https://image.tmdb.org/t/p/w500/${backdrop_path}" alt=" " loading="lazy" />
          <div class="info">
            <p class="info-item">
                 <b>${original_title}</b>
          
         </div></div></a>`;
    })
    .join('');
}
// Рендер модального вікна
function createFilmCard(data) {
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

  return `<div class="about_film-card">
         <img src="https://image.tmdb.org/t/p/w500${poster_path}" class="about_film-img" alt="" loading="lazy" data-id=${id} />
        <div class="about_film-info">
          <h1 class="about_film-name">${title}
          </h1>
          <div class="about_film-item">
          <p class="lng-vote about_film-text">Vote / Votes</p>
          <b class="about_film-date">${vote_average} / ${vote_count}</b>
          </div>
          <div class="about_film-item">
          <p class="lng-popul about_film-text">Popularity</p>
          <b class="about_film-date">${popularity}</b>
          </div>
          <div class="about_film-item">
          <p class="lng-oridg about_film-text">Original Title</p>
          <b class="about_film-date">${
            original_title ? original_title : original_name
          }</b>
          </div>
          <div class="about_film-item">
          <p class="lng-genre about_film-text">Genre</p>
          <b class="about_film-date">${
            genres ? genres.map(genre => genre.name) : ' '
          }</b>
          </div>
          <h2 class="lng-about about_film-pretitle">ABOUT</h2>
          <p class="about_film-overview">${overview}</p>
        </div>
      </div>`;
}
// запит для модалки
async function request(id) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=deeaaa6f7bb1ec2c1571c017660b3676`
    );
    const film = response.json();
    return film;
  } catch (error) {
    console.log(error.message);
  }
}

list.addEventListener('click', e => {
  e.preventDefault();
  request(e.target.dataset.id)
    .then(data => {
      const cardObject = data;
      modal.insertAdjacentHTML('afterbegin', createFilmCard(data));

      watchButton.addEventListener('click', addToWatchStorage(cardObject));
      queueButton.addEventListener('click', addToQueueStorage(cardObject));
    })
    .catch(error => {
      console.log(error);
    });
});

function addToWatchStorage(cardObject) {
  console.log(cardObject);
  localStorage.setItem('Watch', JSON.stringify(cardObject));
}
function addToQueueStorage(cardObject) {
  localStorage.setItem('Queue', JSON.stringify(cardObject));
}
