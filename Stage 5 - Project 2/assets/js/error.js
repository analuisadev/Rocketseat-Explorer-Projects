export const AlertError = {
    error: document.querySelector('.alert-error'),
    openError() {
        AlertError.error.classList.add('open')
    },
    closeError() {
        AlertError.error.classList.remove('open')
    }
}