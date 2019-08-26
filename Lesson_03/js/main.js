let	money = Number(prompt('Ваш месячный доход?'));
let income = 'Десигн, Банковский счет, Долги народа'; 
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'); 
let deposit = prompt('Есть ли у вас депозит в банке?'); 
let mission = 100000;
let period = 6;

console.log(money);
console.log(addExpenses.split(', '));

if (deposit == 'Да'){
	let deposit = true;
	console.log(deposit);
} else if (deposit == 'Нет') {
	let deposit = false;
	console.log(deposit);
} else {
	alert('Введите значение: Да или Нет!');
}

console.log(typeof(money) + '\n' + typeof(income) + '\n' + typeof(deposit));

let Regress_One = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let Howmuch_One = Number(prompt('Во сколько это обойдется?'));
let	Regress_Two = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let	Howmuch_Two = Number(prompt('Во сколько это обойдется?'));

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