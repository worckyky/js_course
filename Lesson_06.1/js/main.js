let week = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

console.log(week);



for (let i = 0; i < week.length; i++) {
	if (i == 5 || i == 6) {
		week[i] = week[i].italics();
	}
	if (i == (new Date()).getDay()) {
		week[i] = week[i].bold();
	}
	document.write(week[i]+ '<br>');
};


