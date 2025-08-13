let currentOperand = '0';
        let previousOperand = '';
        let operation = undefined;
        let resetScreen = false;

        const currentOperandElement = document.getElementById('current-operand');
        const previousOperandElement = document.getElementById('previous-operand');

        function appendNumber(number) {
            if (currentOperand === '0' || resetScreen) {
                currentOperand = '';
                resetScreen = false;
            }
            if (number === '.' && currentOperand.includes('.')) return;
            currentOperand += number;
            updateDisplay();
        }

        function appendOperator(operator) {
            if (currentOperand === '') return;
            if (previousOperand !== '') {
                calculate();
            }
            operation = operator;
            previousOperand = currentOperand;
            currentOperand = '';
            updateDisplay();
        }

        function calculate() {
            let computation;
            const prev = parseFloat(previousOperand);
            const current = parseFloat(currentOperand);
            
            if (isNaN(prev) || isNaN(current)) return;
            
            switch (operation) {
                case '+':
                    computation = prev + current;
                    break;
                case '-':
                    computation = prev - current;
                    break;
                case '*':
                    computation = prev * current;
                    break;
                case '/':
                    computation = prev / current;
                    break;
                default:
                    return;
            }
            
            currentOperand = computation.toString();
            operation = undefined;
            previousOperand = '';
            resetScreen = true;
            updateDisplay();

        }

        function clearAll() {
            currentOperand = '0';
            previousOperand = '';
            operation = undefined;
            updateDisplay();
        }

        function updateDisplay() {
            currentOperandElement.textContent = currentOperand;
            if (operation != null) {
                previousOperandElement.textContent = `${previousOperand} ${operation}`;
            } else {
                previousOperandElement.textContent = '';
            }
        }

