const modalLinkEl = document.getElementById('modalTeam');
const modalEl = document.querySelector('.modal-team');
modalLinkEl.addEventListener('click', modalOpen);

function modalOpen(event) {
  event.preventDefault();
  modalEl.classList.toggle('visually-hidden');
  modalEl.addEventListener('keydown');
}

// function modalClose() {
//   if (modalEl.classList.contains('visually-hidden') === false) {
//     console.log('modal');
//   }
//   console.log('modal is close');
// }
