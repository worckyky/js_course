let money,
	income = 'Десигн, Банковский счет, Долги народа',
	addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', "ор"),
	deposit = confirm('Есть ли у вас депозит в банке?', "ор"),
	mission = 100000,
	period = 6;

let start = function () {

	money = prompt('Ваш месячный доход?');
	do {
		money = prompt('Ваш месячный доход?');
	}
	while (isNaN(money) || money === '' || money === null);
	return +money;
};

money = start();

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

		question = prompt('Во сколько это обойдется?');
		console.log(question);

		while (isNaN(question) || question === '' || question === null) {
			question = prompt('Во сколько это обойдется?');
		}

		sum += +question;
		// Цикл валидация входных данных ( Только число )

	};

	return sum;
};

let expensesAmount = getExpensesMonth();


console.log('Функция выводит сумму расходов - ' + expensesAmount);



// Функция выводит разницу между доходами и рассходами
let getAccumulatedMonth = function () {
	return money - expensesAmount;
};
console.log('Функция выводит разницу между доходами и рассходами - ' + getAccumulatedMonth());



// Функция выводит колличество месяцев за которое будет достигнута цель
let getTargetMonth = function () {
	return Math.floor(mission / getAccumulatedMonth());
};

let protection = function () {
	while (getTargetMonth() < 0) {
		alert("Цель не будет достигнута, значение отрицательное!");
		break;
	}
	return window.stop();
}

protection();

console.log('Функция выводит колличество месяцев (достижение цели) - ' + getTargetMonth());



// Выводит бюджет в день
let getBudgetDay = function () {
	return (Math.floor(getAccumulatedMonth() / 30));
};


console.log('Функция выводит бюджет в день - ' + getBudgetDay());


// Определяем уровень дохода
if (getBudgetDay() < 0) {
	alert('Что-то пошло не так :(');
} else {
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
}