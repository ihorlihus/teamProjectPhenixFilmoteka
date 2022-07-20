const refs = {
  openModalBtn: document.querySelector('.modal-open'),
  closeModalBtn: document.querySelector('.modal-close'),
  backdrop: document.querySelector('.js-backdrop'),
};

// refs.openModalBtn.addEventListener('click', onOpenModal);
// refs.closeModalBtn.addEventListener('click', offCloseModal);
// refs.backdrop.addEventListener('click', onBackdropClick);

// function onOpenModal() {
//   window.addEventListener('keydown', onEscKeyPress);
//   refs.backdrop.classList.add('show-modal');
// }

// function offCloseModal() {
//   window.removeEventListener('keydown', onEscKeyPress);
//   refs.backdrop.classList.remove('show-modal');
// }

// function onBackdropClick(e) {
//   if (e.currentTarget === e.target) {
//     offCloseModal();
//   }
// }

// function onEscKeyPress(e) {
//   const ESC_KEY_CODE = 'Escape';
//   if (e.code === ESC_KEY_CODE) {
//     offCloseModal();
//   }
// }
