let money,
	income = 'Десигн, Банковский счет, Долги народа',
	addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
	deposit = confirm('Есть ли у вас депозит в банке?'),
	mission = 100000,
	period = 6;

let start = function () {

		money = prompt('Ваш месячный доход?');
		while (isNaN(money) || money === '' || money === null) {
				money = prompt('Ваш месячный доход?');
				console.log('money', money);
		}

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

	for (let i = 0; i < 2; i++) {

		// 2 вопроса между стадиями цикла 
		if (i === 0) {
			Regress_One = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Квартплата');
		}
		if (i === 1) {
			Regress_Two = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Собака');
		}

		// Главная часть цикла ( Суммирует данные полученные входе цикла )
		sum += +prompt('Во сколько это обойдется?');

		// Цикл валидация входных данных ( Только число )
		while (isNaN(sum) || sum === '' || sum === null) {
			sum += +prompt('Во сколько это обойдется?');
		}
	};

	return sum;
};

let expensesAmount = getExpensesMonth();

console.log('Функция выводит сумму расходов - ' + expensesAmount);



// Функция выводит разницу между доходами и рассходами
let accumulatedMonth = function getAccumulatedMonth(a, b) {
	return a - b;
};
console.log('Функция выводит разницу между доходами и рассходами - ' + accumulatedMonth(money, expensesAmount));



// Функция выводит колличество месяцев за которое будет достигнута цель
let targetMonth = function getTargetMonth(a, b) {
	return Math.floor(a / b);
};
console.log('Функция выводит колличество месяцев (достижение цели) - ' + targetMonth(mission, accumulatedMonth()));



// Выводит бюджет в день
let getBudgetDay = function (a, b) {
	return Math.floor(a / b);
};

console.log('Функция выводит бюджет в день - ' + getBudgetDay(transit, 30));


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