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
	expenses: {
		answerOne: "Ответ 1",
		answerTwo: "Ответ 2"
	},
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
			if (i === 0) {
				appData.expenses.answerOne = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Квартплата');
			}
			if (i === 1) {
				appData.expenses.answerTwo = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Собака');
			}
			let question;
			do {
				question = prompt('Во сколько это обойдется?', 5000);
			} while (isNaN(question) || question === '' || question === null);

			console.log(question);
			appData.expensesMonth += +question;
		};
		return appData.expensesMonth;
	},


	getExpensesMonth: function () {

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
appData.getBudget();
appData.getStatusIncome();
appData.getTargetMonth();





console.log('-----------------------------------------------------––––––––––––––––––––––––––––––––––––––––––––');

for (let key in appData) {
	console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}

