/*jshint esversion: 6 */
// Валидация инпутов
const inputValidation = () => {
	const inputPhone = document.querySelectorAll('.phone-user'),
		inputName = document.querySelectorAll('#name_1, #name_2');
	inputPhone.forEach((validateInput) => {
		validateInput.addEventListener('input', () => {
			validateInput.value = validateInput.value.replace(/[^0-9\\+]/, '');
		});
	});
	inputName.forEach((validateInput) => {
		validateInput.addEventListener('input', () => {
			validateInput.value = validateInput.value.replace(/[^а-яА-Я]/, '');
		});
	});
};
export default inputValidation;