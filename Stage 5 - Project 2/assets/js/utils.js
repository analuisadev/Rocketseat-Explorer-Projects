const calculateIMC = (weight, height) => (weight / ((height / 100) ** 2)).toFixed(2)

const notANumber = (value) =>  isNaN(value) || value === '' || /\s/g.test(value)

export {
    calculateIMC,
    notANumber
}