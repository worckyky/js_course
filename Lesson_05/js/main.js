let money,
	income = 'Десигн, Банковский счет, Долги народа',
	addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', "ор"),
	deposit = confirm('Есть ли у вас депозит в банке?', "ор"),
	mission = 100000,
	period = 6;

let start = function () {

	money = prompt('Ваш месячный доход?', 100000);
	do {
		money = prompt('Ваш месячный доход?', 100000);
	}
	while (isNaN(money) || money === '' || money === null);

};

start();


// Выводим тип данных переменных
let showTypeOf = function (data) {
	console.log(typeof (data) + ' - ' + data);
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);



let Regress_One,
		Regress_Two;



// Функция выводит сумму расходов
let getExpensesMonth = function () {

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

		let protection = function () {
			question = +prompt('Во сколько это обойдется?');
			console.log(question);

			while (isNaN(question) || question === '' || question === null) {
				question = +prompt('Во сколько это обойдется?');
			}
		}
		protection();

		sum += question;
		// Цикл валидация входных данных ( Только число )

	};

	return sum;
};

let expensesAmount = getExpensesMonth();

console.log(typeof (expensesAmount));

console.log('Функция выводит сумму расходов - ' + expensesAmount);



// Функция выводит разницу между доходами и рассходами
let getAccumulatedMonth = function (a, b) {
	return a - b;
};
console.log('Функция выводит разницу между доходами и рассходами - ' + getAccumulatedMonth(money, expensesAmount));



// Функция выводит колличество месяцев за которое будет достигнута цель
let targetMonth = function getTargetMonth(a, b) {
	return Math.floor(a / b);
};
console.log('Функция выводит колличество месяцев (достижение цели) - ' + targetMonth(mission, getAccumulatedMonth()));



// Выводит бюджет в день
let getBudgetDay = function (a, b) {
	return Math.floor(a / b);
};

console.log('Функция выводит бюджет в день - ' + getBudgetDay(getAccumulatedMonth(), 30));


// Определяем уровень дохода
let getStatusIncome = function () {
	if (getBudgetDay() >= 800) {
		return ('Высокий уровень дохода');
	} else if (getBudgetDay() >= 300 && getBudgetDay() < 800) {
		return ('Средний уровень дохода');
	} else if (getBudgetDay() > 0 && getBudgetDay() < 300) {
		return ('Средний уровень дохода');
	} else if (getBudgetDay() <= 0) {
		return ('Что то пошло не так');
	}
};
console.log('Определяем уровень дохода - ' + getStatusIncome());