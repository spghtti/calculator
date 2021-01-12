function sum(a, b) {
	return (a + b);
};

function subtract(a, b) {
	return (a - b);
};

function multiply(a, b) {
	if (a === 0 || b === 0) {
		return 1;

	} else {
		return (a * b);
	};
};

function divide(a, b) {
	if (a === 0) {
		return 1;
	} else if (b === 0){
		return 'Oof!'

	} else {
		return (a / b);
	};
};

function operate(operator, a, b) {
	let total = 0;
	if (operator === 'sum') {
		total = sum(a, b);
	
	} else if (operator === 'subtract') {
		total = subtract(a, b);

	} else if (operator === 'multiply') {Math.round(total * 100) / 100;
		total = multiply(a, b);

	} else if (operator === 'divide') {
		total = divide(a, b);
	};

	if (total >= 9999999999){
		return total.toExponential(4);

	} else if (total === 0) {
		return total;

	} else if (total === 'Oof!') {
		return 'Oof!';

	} else if (a === undefined || b === undefined) {
		return 'Oof!';
	
	} else {
		return Math.round(total * 100) / 100;
	};
};

function clear() {
	clearDisplay();
	entry = [];
};

function positiveNegative() {
	let oldValue = Number(document.querySelector('#box1').textContent);
	document.querySelector('#box1').textContent = (oldValue * -1);
};

function backspace() {
	let oldValue = document.querySelector('#box1').textContent;
	let newValue = oldValue.slice(0, (oldValue.length - 1));
	document.querySelector('#box1').textContent = newValue;
};
 
function clearDisplay() {
	document.querySelector('#box1').textContent = '';
	periodButton.disabled = false;
};

function pressKey(e) {
	keyTarget.forEach((button) => {
		if (e.key === button.name) {
			button.click();
		};
	});
};


let entry = [];
let display = '';
let operator = '';
let equalsPressed = 0;
let operatorPressed = 0;

let buttons = document.querySelectorAll("button"); // Allows numeric input
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		console.log(entry);
		if (equalsPressed === 0) {
			console.log('1');
			newDisplay = (display + '' + button.value);
			document.querySelector('#box1').textContent += newDisplay;

		} else if (equalsPressed === 1) {
			console.log('2');
			oldEntry = parseFloat(document.querySelector('#box1').textContent);
			clear();
			equalsPressed = 0
			newDisplay = (display + '' + button.value);
			document.querySelector('#box1').textContent += newDisplay;
		};
	});
});

let clearBtn = document.querySelector('#box2'); // Clear function
clearBtn.addEventListener('click', () => {
	clear();
	operatorPressed = 0;
});

let signSwitch = document.querySelector('#box4'); // Switch entry from positive to negative
signSwitch.addEventListener('click', () => {
	positiveNegative();
});

let back = document.querySelector('#box3'); // Backspace
back.addEventListener('click', () => {
	backspace();
});

let total = 0;
let oldEntry = 0;

let add = document.querySelector('#box17');
add.addEventListener('click', () => {
	operatorPressed++;
	if (operatorPressed > 2) {
		entry[0] = total;
		entry[1] = parseFloat(document.querySelector('#box1').textContent);
		total = operate(operator, entry[0], entry[1]);
		document.querySelector('#box1').textContent = total;
		equalsPressed = 1;

	} else if (operatorPressed === 2) {
		entry[1] = parseFloat(document.querySelector('#box1').textContent);
		total = operate(operator, entry[0], entry[1]);
		document.querySelector('#box1').textContent = total
		equalsPressed = 1;

	} else {
		entry[0] = parseFloat(document.querySelector('#box1').textContent);
		clearDisplay();
	};
	operator = 'sum';
});

let sub = document.querySelector('#box13');
sub.addEventListener('click', () => {
	operatorPressed++;
	if (operatorPressed > 2) {
		entry[0] = total;
		entry[1] = parseFloat(document.querySelector('#box1').textContent);
		total = operate(operator, entry[0], entry[1]);
		document.querySelector('#box1').textContent = total;
		equalsPressed = 1;

	} else if (operatorPressed === 2) {
		entry[1] = parseFloat(document.querySelector('#box1').textContent);
		total = operate(operator, entry[0], entry[1]);
		document.querySelector('#box1').textContent = total
		equalsPressed = 1;

	} else {
		entry[0] = parseFloat(document.querySelector('#box1').textContent);
		clearDisplay();
	};
	operator = 'subtract';
});

let mult = document.querySelector('#box9');
mult.addEventListener('click', () => {
	operatorPressed++;
	if (operatorPressed > 2) {
		entry[0] = total;
		entry[1] = parseFloat(document.querySelector('#box1').textContent);
		total = operate(operator, entry[0], entry[1]);
		document.querySelector('#box1').textContent = total;
		equalsPressed = 1;

	} else if (operatorPressed === 2) {
		entry[1] = parseFloat(document.querySelector('#box1').textContent);
		total = operate(operator, entry[0], entry[1]);
		document.querySelector('#box1').textContent = total
		equalsPressed = 1;

	} else {
		entry[0] = parseFloat(document.querySelector('#box1').textContent);
		clearDisplay();
	};
	operator = 'multiply';
});

let div = document.querySelector('#box5');
div.addEventListener('click', () => {
	operatorPressed++;
	if (operatorPressed > 2) {
		entry[0] = total;
		entry[1] = parseFloat(document.querySelector('#box1').textContent);
		total = operate(operator, entry[0], entry[1]);
		document.querySelector('#box1').textContent = total;
		equalsPressed = 1;

	} else if (operatorPressed === 2) {
		entry[1] = parseFloat(document.querySelector('#box1').textContent);
		total = operate(operator, entry[0], entry[1]);
		document.querySelector('#box1').textContent = total
		equalsPressed = 1;

	} else {
		entry[0] = parseFloat(document.querySelector('#box1').textContent);
		clearDisplay();
	};
	operator = 'divide';
});

let equals = document.querySelector('#box20');
equals.addEventListener('click', () => {
	if (operatorPressed > 1) {
		entry[1] = parseFloat(document.querySelector('#box1').textContent);
		document.querySelector('#box1').textContent = operate(operator, oldEntry, entry[1]);
		oldEntry = 0;

	} else {
		entry[1] = parseFloat(document.querySelector('#box1').textContent);
		document.querySelector('#box1').textContent = operate(operator, entry[0], entry[1]);
	}
	equalsPressed = 1;
	//operatorPressed = 0;
});

let periodButton = document.querySelector('#box19');
periodButton.addEventListener('click', () => {
	periodPressed = 1;
	let button = document.querySelector('#box19');
	if (periodPressed === 1) {
		periodButton.disabled = true;
	} else {
		periodButton.disabled = false;
	};
});


//let keyTarget = document.querySelectorAll('button');
//window.addEventListener('keyup', pressKey);