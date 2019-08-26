let lang = String(prompt('Какой язык вы хотите использовать, чтобы отобразить дни недели?'));

// 1 Вариант
if (lang == 'ru') {
	console.log(["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"]);
} else if (lang == 'en') {
	console.log(['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']);
};

// 2 Вариант
switch (lang) {
	case('ru'):
		console.log(["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"]);
		break;
	case('en'):
		console.log(['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']);
};

// 3 Вариант
let matrix = [
  ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"],
  ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
];
Matrix_Up = (matrix[0].slice(0, 7));
Matrix_Down = (matrix[1].slice(0, 7));
let question = lang == "ru" ? Matrix_Up : lang == "en" ? Matrix_Down : alert('Ты не угадал :(') ;

console.log(question);

// Последнее задание
let namePerson = String(prompt('Имя пользователя'));
let result = namePerson == "Артем" ? "директор" : namePerson == "Максим" ? "преподоватеь" : "студент" ;

console.log(result);
