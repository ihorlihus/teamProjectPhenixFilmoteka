// const linkRef = document.querySelector('.modal-link');
// const modalRef = document.querySelector('.modal-team');

// linkRef.addEventListener('click', modalOpen);

// function modalOpen(event) {
//     event.preventDefoult()
//     modalRef.classList.remove('.visually-hidden');
// }

// function modalClose(event) {
//     event.preventDefoult()
//     window.addEventListener('keydown', onEscape)
//     modalRef.classList.add('.visually-hidden');
// }

// function onClick(e) {
//   if (e.currentTarget === e.target) {
//     modalClose();
//   }
// }

// function onEscape(event) {
//     if (event.code === 'Escape')
//        modalClose()
// }


(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", onOpenModal);
  refs.closeModalBtn.addEventListener("click", onCloseModal);
  refs.modal.addEventListener("click", onBackdropClick)

  function onOpenModal() {
    window.addEventListener('keydown', onEscKeyPress);
    refs.modal.classList.remove('.is-hidden-modal');
  }

  function onCloseModal() {
    window.removeEventListener('keydown', onEscKeyPress);
    refs.modal.classList.add('.is-hidden-modal');
  }

  function onBackdropClick(event) {
    if (event.currentTarget === event.target)
      onCloseModal();
  }

  function onEscKeyPress(event) {
    if (event.code === 'Escape') {
      onCloseModal();
    }
  }
})();



