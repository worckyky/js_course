const
	// Кнопка в конце
	start = document.getElementById('start'),
	cancel = document.querySelector('#cancel'),
	// Все инпуты 
	allInputs = document.querySelectorAll('input'),
	// Поле месячного дохода
	salaryAmount = document.querySelector('.salary-amount'),
	// Кнопки добавления секций
	incomePlus = document.getElementsByTagName('button')[0],
	expensesPlus = document.getElementsByTagName('button')[1],
	// Чекбокс депозита
	depositCheckMark = document.querySelector('#deposit-check'),
	// Поля возможного дохода
	aditionalIncomeItem = document.querySelectorAll('.additional_income-item'),
	// Поля обязательного дохода
	fieldItemExpensesText = document.querySelector('.expenses-title'),
	// Возможные расходы
	adidtionalExpensesItem = document.querySelector('.additional_expenses-item'),
	// Цель заработать деньжат
	targetAmount = document.querySelector('.target-amount'),
	// Ползунок расчета периода
	periodSelect = document.querySelector('.period-select'),
	// Значени для ползунка
	titlePeriodAmount = document.querySelector('.period-amount'),
	// Все текстовые поля левой колонки
	budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
	budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
	expensesMonthValue = document.querySelector('.expenses_month-value'),
	aditionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
	aditionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
	incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
	targetMonthValue = document.getElementsByClassName('target_month-value')[0],
	periodBlock = document.querySelectorAll('.period'),
	depositBank = document.querySelector('.deposit-bank'),
	depositAmount = document.querySelector('.deposit-amount'),
	depositPersent = document.querySelector('.deposit-percent');

let incomeItems = document.querySelectorAll('.income-items'),
	expensesItems = document.querySelectorAll('.expenses-items');


const AppData = function () {
	this.income = {},
		this.addIncome = [],
		this.incomeMonth = 0,
		this.expenses = {},
		this.addExpenses = [],
		this.deposit = false,
		this.percentDeposit = 0,
		this.moneyDeposit = 0,
		this.mission = 1000000,
		this.budget = 0,
		this.budgetDay = 0,
		this.budgetMonth = 0,
		this.expensesMonth = 0,
		this.statusIncome = ' '
};

AppData.prototype.inputLocked = function () {
	allInputs.forEach(function (item) {
		item.setAttribute("readonly", "readonly");
	});
}
AppData.prototype.replaceButton = () => {
	start.style.display = 'none';
	cancel.style.display = 'flex';
	cancel.style.justifyContent = 'center';
};

AppData.prototype.start = function () {
	this.budget = +salaryAmount.value;
	this.getExpenses();
	this.getIncome();
	this.getExpensesMonth();
	this.getAddExpenses();
	this.getAddIncome();
	this.getInfoDeposit();
	this.getBudget();
	this.showResult();
	this.inputLocked();
	this.replaceButton();
	this.reset();

};

AppData.prototype.showResult = function () {
	budgetMonthValue.value = this.budgetMonth;
	budgetDayValue.value = Math.round(this.budgetDay);
	expensesMonthValue.value = this.expensesMonth;
	aditionalExpensesValue.value = this.addExpenses.join(',');
	aditionalIncomeValue.value = this.addIncome.join(',');
	targetMonthValue.value = Math.ceil(this.getTargetMonth());
	incomePeriodValue.value = this.calcSavedMoney();
	let _this = this;
	periodSelect.addEventListener('change', function () {
		incomePeriodValue.value = _this.calcSavedMoney();
	});
};

AppData.prototype.makeBlock = function (items, btn, param) {
	cloneItem = items[0].cloneNode(true);
	items[0].parentNode.insertBefore(cloneItem, btn);
	items = document.querySelectorAll(`${param}`);
	if (items.length == 3) {
		btn.style.display = 'none';
	}
};

AppData.prototype.addIncomeBlock = function () {
	this.makeBlock(incomeItems, incomePlus, '.income-items');
};
AppData.prototype.addExpensesBlock = function () {
	this.makeBlock(expensesItems, expensesPlus, '.expenses-items');
};

// Моя новая попытка
// Моя новая попытка
// Моя новая попытка
// AppData.prototype.getMoney = function (items, itemUse, cashUse, itemUseParam, cashUseParam, nameParam) {
// 	let _this = this;
// 	nameParam
// 	items.forEach(function (item) {
// 		itemUse = item.querySelector(`${itemUseParam}`).value;
// 		cashUse = item.querySelector(`${cashUseParam}`).value;
// 		if (itemUse !== '' && cashUse !== '') {
// 			_this.nameParam[itemUse] = cashUse;
// 		}
// 	});
// };
// AppData.prototype.getIncome = function () { 
// 	this.getMoney(incomeItems, itemIncome, cashIncome, '.income-title', '.income-amount')
// }

// Функция для полей "Дополнительны заработок"
AppData.prototype.getIncome = function () {
	let _this = this;
	incomeItems.forEach(function (item) {
		let itemIncome = item.querySelector('.income-title').value;
		let cashIncome = item.querySelector('.income-amount').value;
		if (itemIncome !== '' && cashIncome !== '') {
			_this.income[itemIncome] = cashIncome;
		}
	});
	for (let key in this.income) {
		this.incomeMonth += +this.income[key]
	}
};

AppData.prototype.getExpenses = function () {
	let _this = this;
	expensesItems.forEach(function (item) {
		let itemExpenses = item.querySelector('.expenses-title').value;
		let	cashExpenses = item.querySelector('.expenses-amount').value;
		if (itemExpenses !== '' && cashExpenses !== '') {
			_this.expenses[itemExpenses] = cashExpenses;
		}
	});
};

// Возможные расходы строка - перечесление через запятую
AppData.prototype.getAddExpenses = function () {
	let addExpenses = adidtionalExpensesItem.value.split(', ');
	let _this = this;
	addExpenses.forEach(function (item) {
		item = item.trim();
		if (item !== '') {
			_this.addExpenses.push(item);
		}
	});
};

// Поля дополнительного дохода
AppData.prototype.getAddIncome = function () {
	let _this = this;
	aditionalIncomeItem.forEach(function (item) {
		let itemValue = item.value.trim();
		if (itemValue !== '') {
			_this.addIncome.push(itemValue);
		}
	});
};

AppData.prototype.getExpensesMonth = function () {

	for (let key in this.expenses) {
		this.expensesMonth += +this.expenses[key];
	}
};
//---------------------------------
AppData.prototype.getBudget = function () {
	this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit) / 12;

	this.budgetDay = (Math.floor(this.budgetMonth / 30));
};
//---------------------------------
AppData.prototype.getTargetMonth = function () {
	return targetAmount.value / this.budgetMonth;
};
//---------------------------------
AppData.prototype.protection = function () {
	while (this.getTargetMonth() < 0) {
		alert("Цель не будет достигнута, значение отрицательное!");
		break;
	}
	return window.stop();
};
//---------------------------------

AppData.prototype.getStatusIncome = function () {
	if (this.budgetDay < 0) {
		alert('Что-то пошло не так :(');
	} else {
		if (this.budgetDay >= 800) {
			this.statusIncome = 'Высокий уровень дохода';
		} else if (this.budgetDay >= 300 && this.budgetDay < 800) {
			this.statusIncome = 'Средний уровень дохода';
		} else if (this.budgetDay > 0 && this.budgetDay < 300) {
			this.statusIncome = 'Средний уровень дохода';
		} else if (this.budgetDay <= 0) {
			this.statusIncome = 'Что то пошло не так';
		}
	}
	return this.statusIncome;
};

AppData.prototype.getInfoDeposit = function () {
	if (this.deposit) {
		this.percentDeposit = depositPersent.value;
		this.moneyDeposit = depositAmount.value;
		console.log(this.moneyDeposit);
	}
};

AppData.prototype.calcSavedMoney = function () {
	return this.budgetMonth * periodSelect.value;
};



AppData.prototype.startDisabled = function () {
};

AppData.prototype.eventListeners = function () {

	start.addEventListener('click', this.start.bind(appData));
	expensesPlus.addEventListener('click', this.addExpensesBlock.bind(appData));
	incomePlus.addEventListener('click', this.addIncomeBlock.bind(appData));
	
	start.disabled = true;
	// Активация калькулятора, если поле заполнено
	salaryAmount.addEventListener('input', function () {
		if (salaryAmount.value !== '' && !isNaN(salaryAmount.value)) {
			start.disabled = false;
		}
	});


	depositCheckMark.addEventListener('change', function () {
		if (depositCheckMark.checked) {
			depositBank.style.display = 'inline-block';
			depositAmount.style.display = 'inline-block';
			appData.deposit = true;
			depositBank.addEventListener('change', function () {
				let selectIndex = this.options[this.selectedIndex].value;
				if (selectIndex === 'other') {
					depositPersent.style.display = 'inline-block';
					depositPersent.value = '';
				} else {
					depositPersent.style.display = 'none';
					depositPersent.value = selectIndex;
				};
			});
		} else {
			depositBank.style.display = 'none';
			depositAmount.style.display = 'none';
			depositAmount.value = '';
			appData.deposit = false;
		}
	});
	// Перемещение ползунка и изменение числового значения
	periodSelect.addEventListener('change', function () {
		titlePeriodAmount.innerHTML = periodSelect.value;
	});
};

AppData.prototype.reset = function () {
	cancel.addEventListener('click', function () {
		allInputs.forEach(function (item) {
			item.removeAttribute("readonly", "readonly");
			item.value = '';
			expensesItems.forEach(function (item) {
				console.log(item);
				item.querySelector('.expenses-amount').value = '';
				item.querySelector('.expenses-title').value = '';
			});
			incomeItems.forEach(function (item) {
				console.log(item);
				item.querySelector('.income-amount').value = '';
				item.querySelector('.income-title').value = '';
			});
			start.style.display = 'flex';
			start.style.justifyContent = 'center';
			cancel.style.display = 'none';
			start.disabled = true;
			periodSelect.value = 1;
			titlePeriodAmount.innerHTML = 1;
			periodSelect.addEventListener('change', function () {
				incomePeriodValue.value = incomePeriodValue.value * 0;
				titlePeriodAmount.innerHTML = periodSelect.value;
				return;
			});
		});
	});
};


const appData = new AppData();
appData.__proto__.eventListeners();