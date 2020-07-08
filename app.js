const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');
const prevOperation = document.querySelector('.prev__operation');
function calculate(n1, operator, n2) {
	let result = '';
	console.log(`${n1}, ${operator}, ${n2}`);
	switch (operator) {
		case 'add':
			result = parseFloat(n1) + parseFloat(n2);
			console.log('add');
			break;

		case 'subtract':
			result = parseFloat(n1) - parseFloat(n2);
			break;

		case 'multiply':
			result = parseFloat(n1) * parseFloat(n2);
			break;

		case 'divide':
			result = parseFloat(n1) / parseFloat(n2);
			break;
	}

	return result;
}

keys.addEventListener('click', e => {
	if (e.target.matches('button')) {
		const key = e.target;
		const action = key.dataset.action;
		const keyContent = key.textContent;
		const displayedNum = display.textContent;
		// const previousKeyType = calculator.dataset.previousKeyType;
		// let firstValue = '';
		// let oper = '';
		Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));

		if (!action) {
			if (displayedNum === '0') {
				display.textContent = keyContent;
			} else {
				display.textContent = displayedNum + keyContent;
			}
		}
		switch (action) {
			case 'add':
			case 'subtract':
			case 'multiply':
			case 'divide':
				key.classList.add('is-depressed');
				display.textContent = '0';

				calculator.dataset.firstValue = displayedNum;
				calculator.dataset.operator = action;
				prevOperation.textContent = displayedNum + key.textContent;
				console.log(key.textContent);
				break;

			case 'decimal':
				display.textContent += '.';
				console.log('decimal');
				break;

			case 'clear':
				console.log('clear');
				display.textContent = '0';
				prevOperation.textContent = '0';
				break;

			case 'calculate':
				console.log('calculate');
				const firstValue = calculator.dataset.firstValue;
				const operator = calculator.dataset.operator;
				const secondValue = displayedNum;

				display.textContent = calculate(firstValue, operator, secondValue);
				break;
		}
	}
});
