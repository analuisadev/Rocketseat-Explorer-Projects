export const Modal = {

    wrapper: document.querySelector('.modal-wrapper'),
    IMCResult: document.querySelector('.modal .title span'),
    bntCloseModal: document.querySelector('.modal button#close'),

    openModal() {
        Modal.wrapper.classList.add('open')
    },
    closeModal() {
        return Modal.wrapper.classList.toggle('open')
    }
}

Modal.bntCloseModal.onclick = () => Modal.closeModal()

window.addEventListener('keydown', event => { 
    if(event.key === 'Escape') {
        Modal.closeModal()
    }
})