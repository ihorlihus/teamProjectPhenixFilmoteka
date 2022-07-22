import { refs } from './refs.js';
import { createMovieCard } from './libraryMovieCard';

refs.watchedBtnLib.addEventListener('click', onWatchedBtnClick);
refs.queueBtnLib.addEventListener('click', onQueueBtnClick);

export function onWatchedBtnClick() {
    refs.galleryLib.innerHTML = ''
    let getWatched = localStorage.getItem('Watch')
    const parsedGetWatched = JSON.parse(getWatched)
    //console.log(parsedGetWatched)
    if (parsedGetWatched.length !== 0) {
        refs.galleryLib.insertAdjacentHTML('afterbegin', createMovieCard(parsedGetWatched));
    }
}

export function onQueueBtnClick() {
    refs.galleryLib.innerHTML = ''
    let getQueue = localStorage.getItem('Queue')
    const parsedGetQueue = JSON.parse(getQueue)
    //console.log(parsedGetQueue)
    if (parsedGetQueue.length !== 0) {
        refs.galleryLib.insertAdjacentHTML('afterbegin', createMovieCard(parsedGetQueue));
    }
}