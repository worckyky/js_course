let money;
deposit = confirm('Есть ли у вас депозит в банке?', "ор");

/* Начало работы */

let start = function () {

	do {
		money = prompt('Ваш месячный доход?', 100000);
	}
	while (isNaN(money) || money === '' || money === null);
	return +money;
};
money = start();



/* Самое интересное */
let appData = {
	income: 'Десигн, Банковский счет, Долги народа',
	expenses: {},
	addExpenses: [],
	deposit: false,
	mission: 1000000,
	period: 3,
	budget: money,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	targetMonth: 0,
	statusIncome: ' ',

	asking: function () {
		appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', "ор");
		appData.addExpenses = appData.addExpenses.toLowerCase().split(',');
		appData.deposit = confirm('Есть ли у вас депозит в банке?', "ор");
		for (let i = 0; i < 2; i++) {
			// 2 вопроса между стадиями цикла 
			let answer = prompt('Какие обязательные ежемесячные расходы у вас есть?');
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
				appData.statusIncome ='Что то пошло не так';
			}
		}
		return appData.statusIncome;
	}
}

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getStatusIncome();
appData.getTargetMonth();





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