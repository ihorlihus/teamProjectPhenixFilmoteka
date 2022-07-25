import { refs } from './refs.js';
import { createMovieCard } from './libraryMovieCard';
import { renderLibrary } from './renderLibrary';

renderLibrary()

refs.watchedBtnLib.addEventListener('click', onWatchedBtnClick);
refs.queueBtnLib.addEventListener('click', onQueueBtnClick);
//refs.gallery.addEventListener('click', onGalleryContainerClick);

export function onWatchedBtnClick() {
    refs.gallery.innerHTML = ''
    let getWatched = localStorage.getItem('Watch')
    const parsedGetWatched = JSON.parse(getWatched)
    //console.log(parsedGetWatched)
    if (parsedGetWatched.length !== 0) {
        refs.gallery.insertAdjacentHTML('afterbegin', createMovieCard(parsedGetWatched));
        refs.fillerContainer.innerHTML = ''
    } else {
        refs.fillerContainer.innerHTML = `<p class="fill-text">Your list is empty. Choose a movie.</p>`;
    }
}

export function onQueueBtnClick() {
    refs.watchedBtnLib.classList.remove('button-active');
    refs.gallery.innerHTML = ''
    let getQueue = localStorage.getItem('Queue')
    const parsedGetQueue = JSON.parse(getQueue)
    //console.log(parsedGetQueue)
    if (parsedGetQueue.length !== 0) {
        refs.gallery.insertAdjacentHTML('afterbegin', createMovieCard(parsedGetQueue));
        refs.fillerContainer.innerHTML = ''
    } else {
        refs.fillerContainer.innerHTML = `<p class="fill-text">Your list is empty. Choose a movie.</p>`;
    }
}


//function onGalleryContainerClick(evt) {
    //evt.preventDefault()
    //if (evt.target.nodeName !== 'IMG') {
        //return;
    //}
//}