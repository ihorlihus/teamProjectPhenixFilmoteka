
const refs = {
    openModalBtn: document.querySelector('.backdrop-modal'),
    closeModalBtn: document.querySelector('.modal-btn'),
    modal: document.getElementById('modalTeam'),
  };

  refs.modal.addEventListener('click', onOpenModal)
  refs.closeModalBtn.addEventListener('click', onCloseModal);
  

function onOpenModal(event) {
   event.preventDefoult();
   refs.openModalBtn.classList.toggle('is-hidden-modal');
   
  }

function onCloseModal() {
  refs.openModalBtn.classList.toggle('is-hidden-modal');
  window.addEventListener('keydown', onEscKeyPress);

}

  function onEscKeyPress(event) {
    if (event.code === 'Escape') {
      onCloseModal();
    }
  }




