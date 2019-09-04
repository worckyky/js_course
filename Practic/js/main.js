let money;

/* Начало работы */

// let start =
// 	money = start();



/* Самое интересное */
let appData = {
	income: {},
	expenses: {},
	addExpenses: [],
	deposit: false,
	percentDepostit: 0,
	moneyDepostit: 0,
	mission: 1000000,
	period: 3,
	budget: money,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	targetMonth: 0,
	statusIncome: ' ',
	start: function () {
		do {
			money = prompt('Ваш месячный доход?', 100000);
		}
		while (isNaN(money) || money === '' || money === null);
		return +money;
	},

	asking: function () {
		if (confirm('Есть ли у вас дополнительный заработок?')) {
			let itemIncome;
			do {
				itemIncome = prompt('Расскажите, какой у вас дополнительный заработок?');
			} while (!isNaN(itemIncome) || itemIncome === '' || itemIncome === null);
			let cashIncome;
			do {
				cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?');
			} while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null);

			appData.income[itemIncome] = cashIncome;
		}
		do {
			appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
		} while (!isNaN(appData.addExpenses) || appData.addExpenses == '' || appData.addExpenses == null)

		appData.addExpenses = String(appData.addExpenses.split(' , '));

		let capitalize = function () {
			appData.addExpenses = appData.addExpenses.replace(/(^|\s)\S/g, l => l.toUpperCase());
			return appData.addExpenses
		}
		capitalize();


		appData.deposit = confirm('Есть ли у вас депозит в банке?', "ор");
		for (let i = 0; i < 2; i++) {

			// 2 вопроса между стадиями цикла 
			let answer;
			do {
				answer = prompt('Какие обязательные ежемесячные расходы у вас есть?');
			} while (!isNaN(answer) || answer === '' || answer === null);

			let question;
			do {
				question = prompt('Во сколько это обойдется?');
			} while (isNaN(question) || question === '' || question === null);

			console.log(question);
			appData.expenses[answer] = question;
		};

	},

	getExpensesMonth: function () {
		for (let key in appData.expenses) {
			appData.expensesMonth += +appData.expenses[key];
		}
	},
	//---------------------------------
	getBudget: function () {
		appData.budgetMonth = money - appData.expensesMonth;
		appData.budgetDay = (Math.floor(appData.budgetMonth / 30));
	},
	//---------------------------------
	getTargetMonth: function () {
		appData.targetMonth = Math.floor(appData.mission / appData.budgetMonth);
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
		return appData.budgetMonth * appData.period;
	}
};







appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getStatusIncome();
appData.getTargetMonth();
appData.getInfoDeposit();
appData.calcSavedMoney();





console.log('-----------------------------------------------------––––––––––––––––––––––––––––––––––––––––––––');

for (let key in appData) {
	console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}

console.log(appData);
// if (i === 0) {
// 	appData.expenses.answerOne = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Квартплата');
// }
// if (i === 1) {
// 	appData.expenses.answerTwo = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Собака');
// }