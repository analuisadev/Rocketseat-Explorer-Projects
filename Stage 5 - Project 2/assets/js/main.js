import { Modal } from './modal.js'
import { AlertError } from './error.js'
import { calculateIMC, notANumber } from './utils.js'
import { form, inputWeight, inputHeight } from './elements.js'
 
form.onsubmit = (e) => {
    e.preventDefault()

    const height = inputHeight.value
    const weight = inputWeight.value

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if (weightOrHeightIsNotANumber) {
        AlertError.openError()
        return;
    }

    AlertError.closeError()

    const result = calculateIMC(weight, height)
    showResultMessage(result)
}

const showResultMessage = (result) => {
    Modal.IMCResult.innerText = `Seu IMC é de ${result}`
    Modal.openModal()

}

inputWeight.oninput = () => AlertError.closeError()
inputHeight.oninput = () => AlertError.closeError()