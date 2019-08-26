let	money = Number(prompt('Ваш месячный доход?')),
    income = 'Десигн, Банковский счет, Долги народа',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'), 
    deposit = confirm('Есть ли у вас депозит в банке?'), 
    mission = 100000,
    period = 6;

console.log(money);

console.log(addExpenses.split(', '));

console.log(deposit); 

console.log(typeof(money) + '\n' + typeof(income) + '\n' + typeof(deposit));

let Regress_One = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
		Howmuch_One = Number(prompt('Во сколько это обойдется?')),
		Regress_Two = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
		Howmuch_Two = Number(prompt('Во сколько это обойдется?'));

let budgetMonth = money - (Howmuch_One + Howmuch_Two);
console.log(budgetMonth);

console.log(Math.ceil(mission / budgetMonth));

let budgetDay = Math.floor(money / 30);
console.log(budgetDay);


if (budgetDay >= 800) {
	console.log('Высокий уровень дохода');
} else if (budgetDay >= 300 && budgetDay < 800) {
	console.log('Средний уровень дохода');
} else if (budgetDay > 0 && budgetDay < 300) {
	console.log('Средний уровень дохода');
} else if (budgetDay <= 0) {
	console.log('Что то пошло не так');
};