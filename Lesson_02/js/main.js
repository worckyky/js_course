let	money = 65000,
		income = 'Десигн, Банковский счет, Долги народа', 
		addExpenses = 'Еда, Квартплата, Машина', 
		deposit = true, 
		mission = 1000000, 
		period = 6;


console.log(typeof(money) + '\n' + typeof(income) + '\n' + typeof(deposit)); 
console.log(income.length);
console.log('Переод ' + period + ' Месяцев');
console.log('Цель заработать - ' + mission + ' Рублей');


console.log((addExpenses.toLowerCase()).split(', '));

let budgetDay = money / 30 ;

console.log('Это типа дневной бюдежет - ' + budgetDay , ' \nВот это уже деление без остатка - ' + (money % 30) );
