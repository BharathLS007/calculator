let expression = '';
const display = document.getElementById('display');

function appendExpression(value) {
    expression += value;
    display.value = expression;
}

function calculateExpression() {
    try {
        const result = eval(expression);
        expression = String(result);
        display.value = expression;
    } catch (error) {
        expression = '';
        display.value = 'Error';
    }
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function deleteLastCharacter() {
    expression = expression.slice(0, -1);
    display.value = expression;
}
