import { refs } from './refs';
import '../sass/test.scss';
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
  refs.gallery.innerHTML = await renderGallery(results);
}
// рендер галереї
function renderGallery(results) {
  return results
    .map(({ original_title, backdrop_path, id }) => {
      return `<div class="photo-card" width="100px" data-id="${id}" >
      <a class="link_card" href="" >
      <img class="photo-card-image"  src="https://image.tmdb.org/t/p/w500/${backdrop_path}" alt=" "  data-id="${id}" loading="lazy" />
          <div class="info" >
            <p class="info-item" ">
                 <b >${original_title}</b>
          
         </div></a></div>`;
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
  } = data;

  return ` 
        <button type="button" class="modal-close">
          <svg class="modal-close__icon" width="26px" height="26px">
            <use href="./images/modal-close.svg#icon-close"></use>
          </svg>
        </button>
        <img class="img-card" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="" />
        <div class="card-container">
          <h1 class="title-modal">${title}</h1>
          <table class="table">
            <tr>
              <th class="text-table">Vote / Votes</th>
              <th>${vote_average} / ${vote_count}</th>
            </tr>
            <tr>
              <th class="text-table">Popularity</th>
              <th>${popularity}</th>
            </tr>
            <tr>
              <th class="text-table">Original Title</th>
              <th>${original_title ? original_title : original_name}</th>
            </tr>
            <tr>
              <th class="text-table">Genre</th>
              <th>${genres ? genres.map(genre => genre.name) : ' '}</th>
            </tr>
          </table>
          <h2 class="title-about">ABOUT</h2>
          <p class="about-text">${overview}
          </p>
        </div>
    <div class="buttons-container">
          <button type="button" class="button-watched_modal">ADD TO<br>WATCHED</br></button>
          <button type="button" class="button-queue_modal">ADD TO QUEUE</button>
    </div>
  </div>  `;
}
// запит для модалки
async function request(id) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=deeaaa6f7bb1ec2c1571c017660b3676`
    );

    return response.json();
  } catch (error) {
    console.log(error.message);
  }
}

// передавати в об'єкт значення запиту
let cardObject = null;
const watchArr = [];
refs.gallery.addEventListener('click', e => {
  e.preventDefault();
  request(e.target.dataset.id)
    .then(data => {
      cardObject = data;
      refs.modal.innerHTML = '';
      onOpenModal();
      refs.modal.insertAdjacentHTML('afterbegin', createFilmCard(data));
      refs.backdrop.addEventListener('click', onBackdropClick);
      refs.modal.addEventListener('click', addToStorage);
    })
    .catch(error => {
      console.log(error);
    });
});

function addToStorage(e) {
  console.dir(e.target);
  // змінити класс кнопок
  if (e.target.className === 'button-watched_modal') {
    addToWatchStorage();
  }
  if (e.target.className === 'button-queue_modal') {
    addToQueueStorage();
  } else {
    console.log('мимо');
  }
}

function addToQueueStorage() {
  localStorage.setItem('Queue', JSON.stringify(cardObject));
}
function addToWatchStorage(watchArr) {
  watchArr.push(cardObject);
  localStorage.setItem('Watch', JSON.stringify(watchArr));
}

// ???????//////////////////////////
function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  refs.backdrop.classList.add('show-modal');
}

function offCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.backdrop.classList.remove('show-modal');
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    offCloseModal();
  }
}

function onEscKeyPress(e) {
  const ESC_KEY_CODE = 'Escape';
  if (e.code === ESC_KEY_CODE) {
    offCloseModal();
  }
}
