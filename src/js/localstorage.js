import { refs } from './refs';
import { cardObject } from './renderOpenModal';

let watchArr = [];
let queueArr = [];
export function checkStorage() {
  if (localStorage.getItem('Watch')) {
    watchArr = JSON.parse(localStorage.getItem('Watch'));
  }
  if (localStorage.getItem('Queue')) {
    queueArr = JSON.parse(localStorage.getItem('Queue'));
  }
}
export function addToStorage(e) {
  if (e.target.className === 'button-watched__modal') {
    addToWatchStorage();
    return;
  }
  if (e.target.className === 'button-queue__modal') {
    addToQueueStorage();
    return;
  }
}
export function watchButtDisOrEn() {
  toAddWatchButt();
  toAddQueueButt();
  for (const storage of watchArr) {
    if (storage.id === cardObject.id) {
      toRemoveWatchButt();
      break;
    }
  }
  for (const storage of queueArr) {
    if (storage.id === cardObject.id) {
      toRemoveQueueButt();
      break;
    }
  }
}
///watch-Fn
function addToWatchStorage() {
  console.log(cardObject);
  if (refs.watchButton.textContent === 'ADD TO WATCHED') {
    toRemoveWatchButt();
    watchArr.push(cardObject);
    localStorage.setItem('Watch', JSON.stringify(watchArr));
    return;
  }
  if (refs.watchButton.textContent === 'REMOVE FROM WATCH') {
    toAddWatchButt();
    for (const storage of watchArr) {
      if (storage.id === cardObject.id) {
        const removeIndex = watchArr.indexOf(storage);
        const removedWatchArr = watchArr.splice(removeIndex, 1);
        localStorage.setItem('Watch', JSON.stringify(watchArr));
      }
    }
  }
}

function toRemoveWatchButt() {
  refs.watchButton.style.backgroundColor = 'red';
  refs.watchButton.textContent = 'REMOVE FROM WATCH';
}

function toAddWatchButt() {
  refs.watchButton.style.backgroundColor = '#FF6B01';
  refs.watchButton.textContent = 'ADD TO WATCHED';
}
////Queue-Fn
function addToQueueStorage() {
  if (refs.queueButton.textContent === 'ADD TO QUEUE') {
    toRemoveQueueButt();
    queueArr.push(cardObject);
    localStorage.setItem('Queue', JSON.stringify(queueArr));
    return;
  }
  if (refs.queueButton.textContent === 'REMOVE FROM QUEUE') {
    toAddQueueButt();
    for (const storage of queueArr) {
      if (storage.id === cardObject.id) {
        const removeIndex = queueArr.indexOf(storage);
        const removedWatchArr = queueArr.splice(removeIndex, 1);
        localStorage.setItem('Queue', JSON.stringify(queueArr));
      }
    }
  }
}

function toRemoveQueueButt() {
  refs.queueButton.style.backgroundColor = 'pink';
  refs.queueButton.textContent = 'REMOVE FROM QUEUE';
}

function toAddQueueButt() {
  refs.queueButton.style.backgroundColor = 'white';
  refs.queueButton.textContent = 'ADD TO QUEUE';
}
