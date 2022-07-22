import './js/firebase';
import { createMovieCard } from './js/createMovieCard';
// import { watchArr, queueArr } from './js/localstorage';
import { refs } from './js/refs';
import { localGenres } from './js/fetchGenres';
refs.libWatchBtn.addEventListener('click', askLockalStorage);

function askLockalStorage(e) {
  e.preventDefault();
  watchArr = JSON.parse(localStorage.getItem('Watch'));
  console.log(watchArr);
  // createMovieCard(...watchArr);
  refs.gallery.innerHTML = createMovieCard(watchArr);

  //   queueArr = JSON.parse(localStorage.getItem('Queue'));
}
