
let randomName = function(data) {
	if (!isNaN(data)) {
		return alert('Это не строка');
	} else {
		return alert('Видимо это строка');
	}
};

let answer = randomName(prompt('Что-то я сейчас сюда наввожу'));

