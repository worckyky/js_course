// Отправка ajax запроса 
const sendForm = () => {
	const errorMesage = 'Что-то пошло не так...',
		loadMesage = 'Загрузка...',
		sucsessMesege = 'Спасибо! Мы скоро с вами свяжемся!';

	const allForms = document.querySelectorAll('form');

	allForms.forEach((form) => {
		const statusMesege = document.createElement('div');
		statusMesege.style.cssText = 
		`font-size: 2rem;
		color: #ffffff`;
		const inputPhone = document.querySelectorAll('.form-phone');
		const inputText = document.querySelectorAll('#name, #message');

		inputPhone.forEach((validateInput) => {
			validateInput.addEventListener('input', () => {
				validateInput.value = validateInput.value.replace(/[^0-9\\+]/, '');
			});
		});
		inputText.forEach((validateInput) => {
			validateInput.addEventListener('input', () => {
				validateInput.value = validateInput.value.replace(/[^а-яА-Я]/, '');
			});
		});

		form.addEventListener('submit', (event) => {
			event.preventDefault();
			form.appendChild(statusMesege);
			const formData = new FormData(form);
			let body = {};
			formData.forEach((val, key) => {
				body[key] = val;
			});
			const postData = (body) => {
				return fetch('./server.php', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(body)
				});
			};
			postData(body)
				.then((response) => {
					if (response.status !== 200) {
						throw new Error('status network not 200');
					}
					console.log(response);
					statusMesege.textContent = sucsessMesege;
					let inputValue = form.querySelectorAll('input');
					inputValue.forEach((item) => {
						item.value = '';
					}); 
				})
				.catch(() => {
					statusMesege.textContent = errorMesage;
				});
		});
	});
};

export default sendForm;