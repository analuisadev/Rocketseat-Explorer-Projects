const form = document.querySelector('form')
const guess = document.querySelector('#number-guess')
const result = document.querySelector('#result')
const playAgainBtn = document.querySelector('.play-again')
const gameScreenOne = document.querySelector('.game-screen-one')
const gameScreenResult = document.querySelector('.game-screen-result')
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

export {
    form,
    guess,
    result,
    playAgainBtn,
    gameScreenOne,
    gameScreenResult,
    randomNumber,
    xAttempts
}