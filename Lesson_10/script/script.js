let
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
	expensesItems = document.querySelectorAll('.expenses-items'),
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
	incomeItems = document.querySelectorAll('.income-items'),
	targetMonthValue = document.getElementsByClassName('target_month-value')[0],
	periodBlock = document.querySelectorAll('.period');


const AppData = function () {
	this.income = {},
		this.addIncome = [],
		this.incomeMonth = 0,
		this.expenses = {},
		this.addExpenses = [],
		this.deposit = false,
		this.percentDepostit = 0,
		this.moneyDepostit = 0,
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
AppData.prototype.replaceButton = function () {
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

// Добавляем новые поля для обязательного расхода
AppData.prototype.addIncomeBlock = function () {
	cloneIncomeItem = incomeItems[0].cloneNode(true);
	incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
	incomeItems = document.querySelectorAll('.income-items');
	if (incomeItems.length == 3) {
		incomePlus.style.display = 'none';
	}
};

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

// Добавляем новые поля для обязательного расхода
AppData.prototype.addExpensesBlock = function () {

	cloneExpensesItem = expensesItems[0].cloneNode(true);
	expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
	expensesItems = document.querySelectorAll('.expenses-items');

	if (expensesItems.length == 3) {
		expensesPlus.style.display = 'none';
	}
};

AppData.prototype.getExpenses = function () {
	let _this = this;
	expensesItems.forEach(function (item) {
		let itemExpenses = item.querySelector('.expenses-title').value,
			cashExpenses = item.querySelector('.expenses-amount').value;
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
	this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
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

			do {
				this.percentDepostit = prompt('Какой годовой процент?', '10');
			} while (isNaN(this.percentDepostit) || this.percentDepostit === '' || this.percentDepostit === null);
			do {
				this.moneyDepostit = prompt('Какая сумма заложена?', 10000);
			} while (isNaN(this.moneyDepostit) || this.moneyDepostit === '' || this.moneyDepostit === null);
		}
	},
	AppData.prototype.calcSavedMoney = function () {
		return this.budgetMonth * periodSelect.value;
	};

AppData.prototype.reset = function () {
	cancel.addEventListener('click', function () {
		allInputs.forEach(function (item) {
			item.removeAttribute("readonly", "readonly");
			item.value = '';
			expensesItems.forEach(function (item) {
				item.querySelector('.expenses-amount').value = '';
				item.querySelector('.expenses-title').value = '';
			});
			incomeItems.forEach(function (item) {
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

// AppData.prototype.startDisabled = function () {

// };

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
	// Перемещение ползунка и изменение числового значения
	periodSelect.addEventListener('change', function () {
		titlePeriodAmount.innerHTML = periodSelect.value;
	});
};


const appData = new AppData();
appData.__proto__.eventListeners();