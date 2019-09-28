//Валидация некоторых инпутов
const inputValidation = () => {
	const calcBlock = document.querySelector('.calc-block'),
		calcBlockInput = calcBlock.querySelectorAll('input');
	calcBlockInput.forEach((item) => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/\e/g, '');

		});
	});

};
export default inputValidation;