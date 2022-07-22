import { refs } from './refs';
import { openModalMovie } from './buildModalMarcup';
// import { checkStorage, addToStorage, watchButtDisOrEn } from './localstorage';

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
export let cardObject;
refs.gallery.addEventListener('click', e => {
  e.preventDefault();
  request(e.target.dataset.id)
    .then(data => {
      cardObject = data;
      refs.modal.innerHTML = '';
      // checkStorage();
      // watchButtDisOrEn();
      onOpenModal();
      refs.modal.insertAdjacentHTML('afterbegin', openModalMovie(data));
      refs.backdrop.addEventListener('click', onBackdropClick);
      refs.closeModalBtn.addEventListener('click', offCloseModal);
      // refs.buttonsContainer.addEventListener('click', addToStorage);
    })
    .catch(error => {
      console.log(error);
    });
});

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
