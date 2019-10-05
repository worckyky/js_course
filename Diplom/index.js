// 'use strict';
/*jshint esversion: 6 */

// Вызов попапов
const popUp = () => {
	const callBtn = document.querySelectorAll('.call-btn, .consultation-btn'),
		popupCall = document.querySelector('.popup-call'),
		checkBtn = document.querySelector('.check-btn'),
		popupCheck = document.querySelector('.popup-check'),
		discountBtn = document.querySelectorAll('.discount-btn'),
		popupDiscount = document.querySelector('.popup-discount'),
		popupAll = document.querySelectorAll('.popup');

	const openPopup = () => {
		callBtn.forEach((item) => {
			item.addEventListener('click', (event) => {
				event.preventDefault();
				popupCall.style.cssText =
					`display: block;`;
			});
		});
		checkBtn.addEventListener('click', () => {
			popupCheck.style.cssText =
				`display: block;`;
		});
		discountBtn.forEach((item) => {
			item.addEventListener('click', () => {
				popupDiscount.style.cssText =
					`display: block;`;
			});
		});

	};

	const closePopup = () => {
		popupAll.forEach((item) => {

			item.addEventListener('click', (event) => {
				let target = event.target;
				if (target.classList.contains('popup-close')) {
					event.preventDefault();
					item.style.cssText = `display: none;`;
				} else {
					target = target.closest('.popup-content');
					if (!target) {
						item.style.cssText = `display: none;`;
					}
				}
			});
		});
	};

	openPopup();
	closePopup();
};
popUp();

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
inputValidation();

// расскрытие блоков под карточкам 
const moreBlocks = () => {
	const addMoreBlock = document.querySelector('.add-sentence-btn'),
		sentenceBlocks = document.querySelectorAll('.sentence .col-xs-12');

	addMoreBlock.addEventListener('click', () => {

		addMoreBlock.style.cssText = `display: none;`;
		sentenceBlocks.forEach((item) => {
			item.classList.remove('hidden');
			item.classList.remove('visible-sm-block');
		});

	});

};
moreBlocks();

// Переключение аккардиона
const accordion = () => {
	const accordionBlock = document.querySelector('#accordion-two'),
		tabPanel = accordionBlock.querySelectorAll('.panel-heading'),
		tabContent = accordionBlock.querySelectorAll('.panel-collapse');

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
	accordionBlock.addEventListener('click', (event) => {
		event.preventDefault();
		// Определяем цель клика
		let target = event.target;
		target = target.closest('.panel-heading');
		if (target) {
			// i - индекс
			tabPanel.forEach((item, i) => {
				if (item === target) {
					// Связваем обработчик событий
					toggleContent(i);
				}
			});
		}
	});
}
accordion();

// Отправление данных формы json файлом
const postSend = () => {

};
postSend();

const calculator = () => {
	const calculatorBlock = document.querySelector('.panel-group'),
				tabPanel = calculatorBlock.querySelectorAll('.panel-heading'),
				tabBtn = calculatorBlock.querySelectorAll('.construct-btn'),
				tabContent = calculatorBlock.querySelectorAll('.panel-collapse');
	let calculatorData = {
		cameras: 1,
		size: {
			diaOne: '',
			ringOne: '',
			diaTwo: '',
			ringTwo: '',
		},
		bottomFloor: true,
		houseDistance: 4
	};


	const toggleContent = (index) => {
		for (let i = 0; i < tabContent.length; i++) {
			// Условие, где мы переключаем активный таб и меняем контент
			if (index === i) {
				tabContent[i].style.cssText = `display: none;`;
				
			} else {
				tabContent[i].style.cssText = `display: block;`;
			}
		}
	};

	calculatorBlock.addEventListener('click', (event) => {
		event.preventDefault();

		let target = event.target;
		target = target.closest('.construct-btn');
		
		if (target) {
			
			tabBtn.forEach((item, i) => {
				if (item === target) {
					toggleContent(i);
				}
			});
		}
		
	});
};
calculator();