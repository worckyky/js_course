let vars = {
	// Кнопка в конце
	buttonExchange: document.getElementById('start'),
	// Кнопки добавления секций
	btnPlusIncome: document.getElementsByTagName('button')[0],
	btnPlusExpenses: document.getElementsByTagName('button')[1],
	// Чекбокс депозита
	depositCheckMark: document.querySelector('#deposit-check'),
	// Поля возможного дохода
	fieldItemIncomeOne: document.querySelectorAll('.additional_income-item')[0],
	fieldItemIncomeTwo: document.querySelectorAll('.additional_income-item')[1],
	// Поля обязательного дохода
	fieldItemExpensesText : document.querySelector('.expenses-title'),
	fieldItemExpensesAmount : document.querySelector('.expenses-amount'),
	// Возможные расходы
	fieldAdidtionflExpenses : document.querySelector('.additional_expenses-item'),
	// Цель заработать деньжат
	fieldTargetlAmount : document.querySelector('.target-amount'),
	// Ползунок расчета периода
	sliderPeriodSelect : document.querySelector('.period-select'),
	// Все текстовые поля левой колонки
	budgetMonthValueField: document.getElementsByClassName('budget_month-value')[0],
	budgetDayValueField: document.getElementsByClassName('budget_day-value')[0],
	aditionalIncomeValueField: document.getElementsByClassName('additional_income-value')[0],
	aditionalExpensesValueField: document.getElementsByClassName('additional_expenses-value')[0],
	incomePeriodValueField: document.getElementsByClassName('income_period-value')[0],
	targetMonthValueField: document.getElementsByClassName('target_month-value')[0],


};

console.log(Object.keys(vars));


console.log(vars.sliderPeriodSelect);