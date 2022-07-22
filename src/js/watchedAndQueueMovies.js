import { refs } from './refs.js';
import { createMovieCard } from './libraryMovieCard';


refs.watchedBtnLib.addEventListener('click', onWatchedBtnClick);
refs.queueBtnLib.addEventListener('click', onQueueBtnClick);
refs.gallery.addEventListener('click', onGalleryContainerClick);

export function onWatchedBtnClick() {
    refs.gallery.innerHTML = ''
    let getWatched = localStorage.getItem('Watch')
    const parsedGetWatched = JSON.parse(getWatched)
    //console.log(parsedGetWatched)
    if (parsedGetWatched.length !== 0) {
        refs.gallery.insertAdjacentHTML('afterbegin', createMovieCard(parsedGetWatched));
    }
}

export function onQueueBtnClick() {
    refs.gallery.innerHTML = ''
    let getQueue = localStorage.getItem('Queue')
    const parsedGetQueue = JSON.parse(getQueue)
    //console.log(parsedGetQueue)
    if (parsedGetQueue.length !== 0) {
        refs.gallery.insertAdjacentHTML('afterbegin', createMovieCard(parsedGetQueue));
    }
}

function onGalleryContainerClick(evt) {
    evt.preventDefault()
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
}