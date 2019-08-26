lang = String(prompt('Какой язык вы хотите использовать, чтобы отобразить дни недели?'));

// if (lang == 'ru') {
// 	console.log(["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"]);
// } else if (lang == 'en') {
// 	console.log(['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']);
// };

switch (lang) {
	case('ru'):
		console.log(["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"]);
		break;
	case('en'):
		console.log(['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']);
};