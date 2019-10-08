/*jshint esversion: 6 */
// Калькулятор / отправление fetch запроса на сервер
const calculator = () => {
	const calculatorBlock = document.querySelector('.panel-group'),
				tabBtn = calculatorBlock.querySelectorAll('.construct-btn'),
				tabContent = calculatorBlock.querySelectorAll('.panel-collapse');

	let calculatorData = {
		cameras: 10000,
		size: {
			diaOne: 0,
			ringOne: 0,
			diaTwo: 0,
			ringTwo: 0,
		},
		bottomFloor: 2000,
		houseDistance: 0,
		resultPrice: 0,

		cameraSwitch: function () {
			let checkBoxOne = document.querySelector('.onoffswitch-checkbox'),
					collapseBLock = document.querySelector('.collapsed__block');
					collapseBLock.style.cssText = `display: none;`;
					calculatorBlock.addEventListener('click', () => {
					checkBoxOne.addEventListener('change', () => {
					if (!checkBoxOne.checked) {
						collapseBLock.style.cssText = `display: block;`;
						this.cameras = 15000;
					} else {
						collapseBLock.style.cssText = `display: none;`;
						this.cameras = 10000;
					}
				});
			})
		},

		sizeType: function () {
			const panelCollapsedTwo = document.getElementById('collapseTwo'),
						selectedControl = panelCollapsedTwo.querySelectorAll('.form-control');

			selectedControl.forEach((item, index) => {
				item.addEventListener('change', (event) => {
					target = event.target;
					if (target.matches('select')) {
						if (index === 0) {
							this.size.diaOne = +(item.options[item.selectedIndex].value);

						}
						if (index === 1) {
							this.size.ringOne = +(item.options[item.selectedIndex].value);

						}
						if (index === 2) {
							this.size.diaTwo = +(item.options[item.selectedIndex].value);

						}
						if (index === 3) {
							this.size.ringTwo = +(item.options[item.selectedIndex].value);

						}
					}
				});
			})
		},

		downSwitch: function () {
			const panelCollapsedThree = document.getElementById('collapseThree');
			let checkBoxTwo = panelCollapsedThree.querySelector('.onoffswitch-checkbox');
			calculatorBlock.addEventListener('click', () => {
				checkBoxTwo.addEventListener('change', () => {
					if (!checkBoxTwo.checked) {
						this.bottomFloor = 1000;
					} else {
						this.bottomFloor = 2000;
					}
				});
			})
		},
		distanve: function () {
			const panelCollapsedFour = document.getElementById('collapseFour');
			let distanceValue = panelCollapsedFour.querySelector('input');

			distanceValue.addEventListener('input', () => {
				distanceValue.value = distanceValue.value.replace(/[^0-9]/, '');
			});
			distanceValue.addEventListener('change', () => {
				this.houseDistance = +distanceValue.value;
			});
		},
		changeItems: function () {
			const accordionBlockOne = document.querySelector('#accordion'),
				tabPanel = accordionBlockOne.querySelectorAll('.panel-heading'),
				tabContent = accordionBlockOne.querySelectorAll('.panel-collapse');

			const toggleContent = (index) => {
				for (let i = 0; i < tabContent.length; i++) {
					// Улсовие, где мы переключаем активный таб и меняем контент
					if (index === i) {
						tabContent[i].style.cssText = `display: block !important;`;
					} else {
						tabContent[i].style.cssText = `display: none !important;`;
					}
				}
			};

			//Делигируем обработчик событий
			accordionBlockOne.addEventListener('click', (event) => {
				// Определяем цель клика
				let target = event.target;
				target = target.closest('.panel-heading');
				if (target) {
					event.preventDefault();
					// i - индекс
					tabPanel.forEach((item, i) => {
						if (item === target) {
							// Связваем обработчик событий
							toggleContent(i);
						}
					});
				}
			});

		},
		calculation: function () {
			const panelCollapsedFour = document.getElementById('collapseFour'),
						finishBtn = panelCollapsedFour.querySelector('button');
			let resultValue = document.querySelector('#calc-result');
			finishBtn.addEventListener('click', () => {
				resultValue.value = this.cameras + (this.cameras * this.size.diaOne) + (this.cameras * this.size.ringOne) + (this.cameras * this.size.diaTwo) + (this.cameras * this.size.ringTwo) + this.bottomFloor;
				this.resultPrice = +resultValue.value;
				resultValue.value = `Примерная стоимость: ` + this.resultPrice + ` Рублей`;
				this.changeItems();
			});
		},
		calcStart: function () {
			this.cameraSwitch();
			this.sizeType();
			this.downSwitch();
			this.distanve();
			this.calculation();
		}
	};

	calculatorData.calcStart();
	const dataSend = () => {
		const errorMesage = 'Что-то пошло не так...',
					loadMesage = 'Загрузка...',
					sucsessMesege = 'Спасибо! Мы скоро с вами свяжемся!';
		const calcForm = document.querySelectorAll('form');

		const statusMesege = document.createElement('div');
		statusMesege.style.cssText =
			`font-size: 2rem;
					color: #000000`;
		calcForm.forEach((calcForm) => {


			calcForm.addEventListener('submit', (event) => {
				event.preventDefault();
				calcForm.appendChild(statusMesege);
				const formData = new FormData(calcForm);
				let body = {};
				formData.forEach((val, key) => {
					body[key] = val;
				});
				let resultValueCalc = document.querySelector('#calc-result'),
						resultValueQuestion = document.querySelector('.director-form input');
				if (resultValueCalc.value !== '') {
					body['Стоимость колличества камер'] = calculatorData.cameras;
					body['Размеры'] = calculatorData.size;
					body['Крышка люка'] = calculatorData.bottomFloor;
					body['Расстояние до дома'] = calculatorData.houseDistance;
					body['Общая стоимость'] = calculatorData.resultPrice;
				}

				if (resultValueQuestion.value !== '') {
					body['Вопрос потенцилаьного клиента'] = resultValueQuestion.value;
				}
				const postData = (body) => {
					return fetch('./server.php', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(body)
					});
				};
				statusMesege.textContent = loadMesage;
				postData(body)
					.then((response) => {
						if (response.status !== 200) {
							throw new Error('status network not 200');
						}
						statusMesege.textContent = sucsessMesege;
						let inputValue = calcForm.querySelectorAll('input');
						inputValue.forEach((item) => {
							item.value = '';
						});
					})
					.catch(() => {
						statusMesege.textContent = errorMesage;
					});
			});
		});
	}
	dataSend();
	const toggleContent = (index) => {
		for (let i = 0; i < tabContent.length; i++) {
			// Условие, где мы переключаем активный таб и меняем контент
			if (index === i) {
				tabContent[i + 1].style.cssText = `display: block;`;
				tabContent[i].style.cssText = `display: none;`;
			}
			if (index === 3) {
				return;
			}
		}
	};
	calculatorBlock.addEventListener('click', (event) => {
		let target = event.target;
		target = target.closest('.construct-btn');
		if (target) {
			event.preventDefault();
			tabBtn.forEach((item, i) => {
				if (item === target) {
					toggleContent(i);
				}
			});
		}
	});

};
export default calculator;
