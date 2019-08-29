let money,
	income = 'Десигн, Банковский счет, Долги народа',
	addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', "ор"),
	deposit = confirm('Есть ли у вас депозит в банке?', "ор"),
	mission = 100000,
	period = 6;

/* Начало работы */

let start = function () {

	money = prompt('Ваш месячный доход?');
	do {
		money = prompt('Ваш месячный доход?');
	}
	while (isNaN(money) || money === '' || money === null);
	return +money;
};
money = start();
/* Еще какие-то переменные */
let Regress_One,
	Regress_Two;


/* Самое интересное */
let appData = {
	budget: money,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,

	getExpensesMonth : function () {
		let sum = 0;
		let question;
		for (let i = 0; i < 2; i++) {

			// 2 вопроса между стадиями цикла 
			if (i === 0) {
				Regress_One = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Квартплата');
			}
			if (i === 1) {
				Regress_Two = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Собака');
			}
			// Главная часть цикла ( Суммирует данные полученные входе цикла )

			question = prompt('Во сколько это обойдется?');
			console.log(question);
			while (isNaN(question) || question === '' || question === null) {
				question = prompt('Во сколько это обойдется?');
			}
			sum += +question;
			
		};

		return sum;
	},
	//---------------------------------
	// expensesAmount : getExpensesMonth(),
	//---------------------------------
	getAccumulatedMonth : function () {
		return appData.budget - appData.getExpensesMonth();
	},
	//---------------------------------
	getTargetMonth : function () {
		return Math.floor(mission / appData.getAccumulatedMonth());
	},
	//---------------------------------
	protection : function () {
		while (appData.getTargetMonth() < 0) {
			alert("Цель не будет достигнута, значение отрицательное!");
			break;
		}
		return window.stop();
	},
	//---------------------------------
	getBudgetDay: function () {
		return (Math.floor(appData.getAccumulatedMonth() / 30));
	},
	//---------------------------------
	getStatusIncome : Number,
	protectionTwo : function () {
		if (appData.getBudgetDay() < 0) {
			alert('Что-то пошло не так :(');
		} else {
			appData.getStatusIncome = function () {
				if (appData.getBudgetDay() >= 800) {
					return ('Высокий уровень дохода');
				} else if (appData.getBudgetDay() >= 300 && appData.getBudgetDay() < 800) {
					return ('Средний уровень дохода');
				} else if (appData.getBudgetDay() > 0 && appData.getBudgetDay() < 300) {
					return ('Средний уровень дохода');
				} else if (appData.getBudgetDay() <= 0) {
					return ('Что то пошло не так');
				}
			};
			console.log('Определяем уровень дохода - ' + appData.getStatusIncome());
		}
	}
}
// console.log(appData.getExpensesMonth());
// То, что лучше пока не трогать()
// То, что лучше пока не трогать
// То, что лучше пока не трогать

// console.log('Функция выводит сумму расходов - ' + appData.getExpensesMonth());
console.log('Функция выводит разницу между доходами и рассходами - ' + appData.getAccumulatedMonth());
console.log('Функция выводит колличество месяцев (достижение цели) - ' + appData.getTargetMonth());
appData.protection();
console.log('Функция выводит бюджет в день - ' + appData.getBudgetDay());
appData.protectionTwo();



