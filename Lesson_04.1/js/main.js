
let randomName = function(data) {
	console.log(data);
	let number = 123;
	if (typeof(data) == typeof(number)) {
		return alert('Это не стока');
	} else {
		return alert('Видимо это строка')
	}
};

let answer = randomName(prompt('Что-то я сейчас сюда наввожу'));

