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
	targetMonthValue = document.getElementsByClassName('target_month-value')[0];




/* Самое интересное */
let appData = {
	income: {},
	addIncome: [],
	incomeMonth: 0,
	expenses: {},
	addExpenses: [],
	deposit: false,
	percentDepostit: 0,
	moneyDepostit: 0,
	mission: 1000000,
	budget: 0,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	statusIncome: ' ',
	// Активируем работу нашего приложения через кнопку
	inputLocked: function () {
		allInputs.forEach(function (item) {
			item.setAttribute("readonly", "readonly");
		});
	},
	replaceButton: function () {
		start.style.display = 'none';
		cancel.style.display = 'flex';
		cancel.style.justifyContent = 'center';
	},
	reset : function() {
		cancel.addEventListener('click' , function(){
			allInputs.forEach(function(item) {
				item.removeAttribute("readonly", "readonly");
				item.value = '';
				start.style.display = 'flex';
				start.style.justifyContent = 'center';
				cancel.style.display = 'none';
				
			});
		});
	},
	start: function () {

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

	},
	// Функция вывода результата
	showResult: function () {
		budgetMonthValue.value = this.budgetMonth;
		budgetDayValue.value = Math.round(this.budgetDay);
		expensesMonthValue.value = this.expensesMonth;
		aditionalExpensesValue.value = this.addExpenses.join(',');
		aditionalIncomeValue.value = this.addIncome.join(',');
		targetMonthValue.value = Math.ceil(this.getTargetMonth());
		incomePeriodValue.value = this.calcSavedMoney();
		periodSelect.addEventListener('change', function () {
			incomePeriodValue.value = appData.calcSavedMoney();
		});
	},

	// Добавляем новые поля для обязательного расхода
	addIncomeBlock: function () {
		cloneIncomeItem = incomeItems[0].cloneNode(true);
		incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
		incomeItems = document.querySelectorAll('.income-items');
		if (incomeItems.length == 3) {
			incomePlus.style.display = 'none';
		}
	},
	// Функция для полей "Дополнительны заработок"
	getIncome: function () {
		let replace = this;
		incomeItems.forEach(function (item) {
			let itemIncome = item.querySelector('.income-title').value;
			let cashIncome = item.querySelector('.income-amount').value;
			if (itemIncome !== '' && cashIncome !== '') {
				replace.income[itemIncome] = cashIncome;
			}
		});
		for (let key in this.income) {
			this.incomeMonth += +this.income[key]
		}
	},
	// Добавляем новые поля для обязательного расхода
	addExpensesBlock: function () {
		cloneExpensesItem = expensesItems[0].cloneNode(true);
		expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
		expensesItems = document.querySelectorAll('.expenses-items');
		if (expensesItems.length == 3) {
			expensesPlus.style.display = 'none';
		}
	},
	getExpenses: function () {
		let replace = this;
		expensesItems.forEach(function (item) {
			let itemExpenses = item.querySelector('.expenses-title').value,
				cashExpenses = item.querySelector('.expenses-amount').value;
			if (itemExpenses !== '' && cashExpenses !== '') {
				replace.expenses[itemExpenses] = cashExpenses;
			}
		});
	},
	// Возможные расходы строка - перечесление через запятую
	getAddExpenses: function () {
		let addExpenses = adidtionalExpensesItem.value.split(', ');
		let replace = this;
		addExpenses.forEach(function (item) {
			item = item.trim();
			if (item !== '') {
				replace.addExpenses.push(item);
			}
		});
	},
	// Поля дополнительного дохода
	getAddIncome: function () {
		let replace = this;
		aditionalIncomeItem.forEach(function (item) {
			let itemValue = item.value.trim();
			if (itemValue !== '') {
				replace.addIncome.push(itemValue);
			}
		});
	},
	asking: function () {

		let capitalize = function () {
			appData.addExpenses = appData.addExpenses.replace(/(^|\s)\S/g, l => l.toUpperCase());
			return appData.addExpenses
		}
		capitalize();


		appData.deposit = confirm('Есть ли у вас депозит в банке?', "ор");


	},

	getExpensesMonth: function () {
		for (let key in this.expenses) {
			this.expensesMonth += +this.expenses[key];
		}
	},
	//---------------------------------
	getBudget: function () {
		this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
		this.budgetDay = (Math.floor(this.budgetMonth / 30));
	},
	//---------------------------------
	getTargetMonth: function () {
		return targetAmount.value / this.budgetMonth;
	},
	//---------------------------------
	protection: function () {
		while (appData.getTargetMonth() < 0) {
			alert("Цель не будет достигнута, значение отрицательное!");
			break;
		}
		return window.stop();
	},
	//---------------------------------

	getStatusIncome: function () {
		if (appData.budgetDay < 0) {
			alert('Что-то пошло не так :(');
		} else {
			if (appData.budgetDay >= 800) {
				appData.statusIncome = 'Высокий уровень дохода';
			} else if (appData.budgetDay >= 300 && appData.budgetDay < 800) {
				appData.statusIncome = 'Средний уровень дохода';
			} else if (appData.budgetDay > 0 && appData.budgetDay < 300) {
				appData.statusIncome = 'Средний уровень дохода';
			} else if (appData.budgetDay <= 0) {
				appData.statusIncome = 'Что то пошло не так';
			}
		}
		return appData.statusIncome;
	},
	getInfoDeposit: function () {
		if (appData.deposit) {

			do {
				appData.percentDepostit = prompt('Какой годовой процент?', '10');
			} while (isNaN(appData.percentDepostit) || appData.percentDepostit === '' || appData.percentDepostit === null);
			do {
				appData.moneyDepostit = prompt('Какая сумма заложена?', 10000);
			} while (isNaN(appData.moneyDepostit) || appData.moneyDepostit === '' || appData.moneyDepostit === null);
		}
	},
	calcSavedMoney: function () {
		return appData.budgetMonth * periodSelect.value;
	},

};

// Активация калькулятора, если поле заполнено
salaryAmount.addEventListener('input', function () {
	if (salaryAmount.value === '') {
		start.disabled = true;
	}
});

start.addEventListener('click', appData.start.bind(appData));




expensesPlus.addEventListener('click', appData.addExpensesBlock.bind(appData));
incomePlus.addEventListener('click', appData.addIncomeBlock.bind(appData));

// Перемещение ползунка и изменение числового значения
periodSelect.addEventListener('change', function () {
	titlePeriodAmount.innerHTML = periodSelect.value;
});