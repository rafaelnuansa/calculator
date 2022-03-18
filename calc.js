class Calculator {
    constructor(sebelumOperandTextElement, sekarangOperandTextElement) {
      this.sebelumOperandTextElement = sebelumOperandTextElement
      this.sekarangOperandTextElement = sekarangOperandTextElement
      this.clear()
    }
  
    clear() {
      this.sekarangOperand = ''
      this.sebelumOperand = ''
      this.operasi = undefined
    }
  
    delete() {
      this.sekarangOperand = this.sekarangOperand.toString().slice(0, -1)
    }
  
    appendNumber(number) {
      if (number === '.' && this.sekarangOperand.includes('.')) return
      this.sekarangOperand = this.sekarangOperand.toString() + number.toString()
    }
  
    chooseoperasi(operasi) {
      if (this.sekarangOperand === '') return
      if (this.sebelumOperand !== '') {
        this.compute()
      }
      this.operasi = operasi
      this.sebelumOperand = this.sekarangOperand
      this.sekarangOperand = ''
    }
  
    compute() {
      let computation
      const prev = parseFloat(this.sebelumOperand)
      const sekarang = parseFloat(this.sekarangOperand)
      if (isNaN(prev) || isNaN(sekarang)) return
      switch (this.operasi) {
        case '+':
          computation = prev + sekarang
          break
        case '-':
          computation = prev - sekarang
          break
        case '*':
          computation = prev * sekarang
          break
        case '÷':
          computation = prev / sekarang
          break
        default:
          return
      }
      this.sekarangOperand = computation
      this.operasi = undefined
      this.sebelumOperand = ''
    }
  
    getDisplayNumber(number) {
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      }
    }
  
    updateDisplay() {
      this.sekarangOperandTextElement.innerText =
        this.getDisplayNumber(this.sekarangOperand)
      if (this.operasi != null) {
        this.sebelumOperandTextElement.innerText =
          `${this.getDisplayNumber(this.sebelumOperand)} ${this.operasi}`
      } else {
        this.sebelumOperandTextElement.innerText = ''
      }
    }
  }
  
  
  const numberButtons = document.querySelectorAll('[data-number]')
  const operasiButtons = document.querySelectorAll('[data-operasi]')
  const equalsButton = document.querySelector('[data-equals]')
  const deleteButton = document.querySelector('[data-delete]')
  const allClearButton = document.querySelector('[data-all-clear]')
  const sebelumOperandTextElement = document.querySelector('[data-sebelum-operand]')
  const sekarangOperandTextElement = document.querySelector('[data-sekarang-operand]')
  
  const calculator = new Calculator(sebelumOperandTextElement, sekarangOperandTextElement)
  
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  operasiButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseoperasi(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
  })
  
  allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })
  
  deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })