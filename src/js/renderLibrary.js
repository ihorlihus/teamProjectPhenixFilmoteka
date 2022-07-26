import { refs } from './refs.js';
import { createMovieCard } from './libraryMovieCard';


export function renderLibrary() {
    refs.watchedBtnLib.classList.add('button-active');
    let getWatched = localStorage.getItem('Watch')
    const parsedGetWatched = JSON.parse(getWatched)
    if (parsedGetWatched.length !== 0) {
        refs.gallery.insertAdjacentHTML('afterbegin', createMovieCard(parsedGetWatched));
        refs.fillerContainer.innerHTML = ''
    } else {
        refs.fillerContainer.innerHTML = `<p class="fill-text">Your list is empty. Choose a movie.</p>`;
    }
}
