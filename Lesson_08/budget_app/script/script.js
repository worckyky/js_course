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

	start: function () {

		appData.budget = +salaryAmount.value;

		appData.getExpenses();
		appData.getIncome();
		appData.getExpensesMonth();
		appData.getAddExpenses();
		appData.getAddIncome();
		appData.getBudget();
		appData.showResult();
		appData.inputLocked();
		appData.replaceButton();

	},
	// Функция вывода результата
	showResult: function () {
		budgetMonthValue.value = appData.budgetMonth;
		budgetDayValue.value = Math.round(appData.budgetDay);
		expensesMonthValue.value = appData.expensesMonth;
		aditionalExpensesValue.value = appData.addExpenses.join(',');
		aditionalIncomeValue.value = appData.addIncome.join(',');
		targetMonthValue.value = Math.ceil(appData.getTargetMonth());
		incomePeriodValue.value = appData.calcSavedMoney();
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
		incomeItems.forEach(function (item) {
			let itemIncome = item.querySelector('.income-title').value;
			let cashIncome = item.querySelector('.income-amount').value;
			if (itemIncome !== '' && cashIncome !== '') {
				appData.income[itemIncome] = cashIncome;
			}
		});
		for (let key in appData.income) {
			appData.incomeMonth += +appData.income[key]
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
		expensesItems.forEach(function (item) {
			let itemExpenses = item.querySelector('.expenses-title').value,
				cashExpenses = item.querySelector('.expenses-amount').value;
			if (itemExpenses !== '' && cashExpenses !== '') {
				appData.expenses[itemExpenses] = cashExpenses;
			}
		});
	},
	// Возможные расходы строка - перечесление через запятую
	getAddExpenses: function () {
		let addExpenses = adidtionalExpensesItem.value.split(', ');
		addExpenses.forEach(function (item) {
			item = item.trim();
			if (item !== '') {
				appData.addExpenses.push(item);
			}
		});
	},
	// Поля дополнительного дохода
	getAddIncome: function () {
		aditionalIncomeItem.forEach(function (item) {
			let itemValue = item.value.trim();
			if (itemValue !== '') {
				appData.addIncome.push(itemValue);
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

		// for (let i = 0; i < 2; i++) {

		// 	// 2 вопроса между стадиями цикла 
		// 	let answer;
		// 	do {
		// 		answer = prompt('Какие обязательные ежемесячные расходы у вас есть?');
		// 	} while (!isNaN(answer) || answer === '' || answer === null);

		// 	let question;
		// 	do {
		// 		question = prompt('Во сколько это обойдется?');
		// 	} while (isNaN(question) || question === '' || question === null);

		// 	console.log(question);
		// 	appData.expenses[answer] = question;
		// };

	},

	getExpensesMonth: function () {
		for (let key in appData.expenses) {
			appData.expensesMonth += +appData.expenses[key];
		}
	},
	//---------------------------------
	getBudget: function () {
		appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
		appData.budgetDay = (Math.floor(appData.budgetMonth / 30));
	},
	//---------------------------------
	getTargetMonth: function () {
		return targetAmount.value / appData.budgetMonth;
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
	} else {
		start.disabled = false;
		start.addEventListener('click', appData.start);
	}
});

expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);

// Перемещение ползунка и изменение числового значения
periodSelect.addEventListener('change', function () {
	titlePeriodAmount.innerHTML = periodSelect.value;
});





// appData.getStatusIncome();
// appData.getTargetMonth();
// appData.getInfoDeposit();
// appData.calcSavedMoney();





// console.log('-----------------------------------------------------––––––––––––––––––––––––––––––––––––––––––––');

// for (let key in appData) {
// 	console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
// }

// console.log(appData);
// if (i === 0) {
// 	appData.expenses.answerOne = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Квартплата');
// }
// if (i === 1) {
// 	appData.expenses.answerTwo = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Собака');
// }