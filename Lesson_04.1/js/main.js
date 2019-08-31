
let randomName = function() {

	do {
		let = randomSymbol = prompt('Что-то совсем случайное');
		if (!isNaN(randomSymbol) || randomSymbol == null || randomSymbol == '') {
			alert('Введите сюда строку, пожалуйста...');
		}
	} while (!isNaN(randomSymbol) || randomSymbol == null || randomSymbol == '');
	if (randomSymbol.length > 30) {
		return randomSymbol = randomSymbol.substring(0, 30).trim() + '...';
	} else {
		return randomSymbol = randomSymbol.trim();
	}
 };


randomName();
console.log(randomSymbol);

