let	money = Number(prompt('Ваш месячный доход?')),
    income = 'Десигн, Банковский счет, Долги народа',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'), 
    deposit = confirm('Есть ли у вас депозит в банке?'), 
    mission = 100000,
    period = 6;
let	Regress_One = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
		Howmuch_One = Number(prompt('Во сколько это обойдется?')),
		Regress_Two = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
		Howmuch_Two = Number(prompt('Во сколько это обойдется?'));


// Выводим тип данных переменных
let showTypeOf = function(data){
	console.log(typeof(data) + ' - ' + data);
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);



// Функция выводит сумму расходов
// let Sum = function getExpensesMonth(a, b, c) {
// 	let Spliter = addExpenses.split(', ');
// 			a = Number(Spliter[0]);
// 			b = Number(Spliter[1]);
// 			c = Number(Spliter[2]);
// 			return a + b + c ;
// };
// console.log('Функция выводит сумму расходов - ' + Sum());


// Функция выводит сумму расходов
let Sum = function getExpensesMonth() {
	a = Howmuch_One;
	b = Howmuch_Two;
	return a + b;
};

console.log('Функция выводит сумму расходов - ' + Sum());


// Функция выводит разницу между доходами и рассходами
let accumulatedMonth = function getAccumulatedMonth(a, b) {
	a = money;
	b = Sum();
	return a - b ;
};
console.log('Функция выводит разницу между доходами и рассходами - ' + accumulatedMonth());



// Функция выводит колличество месяцев за которое будет достигнута цель
let targetMonth = function getTargetMonth(a, b) {
	a = mission;
	b = accumulatedMonth();
	return Math.floor(a / b);
};
console.log('Функция выводит колличество месяцев (достижение цели) - ' + targetMonth());







// Выводит чистый бюджет в месяц
let budgetMonth = function(a, b, c){
	a = money;
	b = Howmuch_One;
	c = Howmuch_Two;
	return a - (b + c);
};
// Выводит бюджет в день
let getBudgetDay = function(a, b) {
	a = budgetMonth();
	b = 30;
	return Math.floor(a / b);
};

// console.log('Выводит чистый бюджет в месяц - ' + budgetMonth());
console.log('Функция выводит бюджет в день - ' + getBudgetDay());

// let budgetMonth = money - (Howmuch_One + Howmuch_Two);
// console.log(budgetMonth);

// console.log(Math.ceil(mission / budgetMonth));

// let budgetDay = Math.floor(money / 30);
// console.log(budgetDay);




// Определяем уровень дохода
let getStatusIncome = function() {
	if (getBudgetDay() >= 800) {
		return('Высокий уровень дохода');
	} else if (getBudgetDay() >= 300 && getBudgetDay() < 800) {
		return('Средний уровень дохода');
	} else if (getBudgetDay() > 0 && getBudgetDay() < 300) {
		return('Средний уровень дохода');
	} else if (getBudgetDay() <= 0) {
		return('Что то пошло не так');
	}
};
console.log('Определяем уровень дохода - ' + getStatusIncome());