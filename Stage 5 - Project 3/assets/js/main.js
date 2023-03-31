import {
    form,
    guess,
    result,
    playAgainBtn,
    gameScreenOne,
    gameScreenResult,
    randomNumber,
    xAttempts
} from './utils.js'

form.onsubmit = (e) => {
    e.preventDefault()

    let yourAttempt = guess.value

    if (Number(yourAttempt) == randomNumber) {
        gameScreenOne.classList.add('hide')
        gameScreenResult.classList.remove('hide')
        result.innerText = Number(yourAttempt)
    }

    guess.value = ''
    xAttempts++
}

playAgainBtn.addEventListener('click', () => handleResetGame())

const handleResetGame = () => {
    gameScreenOne.classList.remove('hide')
    gameScreenResult.classList.add('hide')
    xAttempts = 1
}