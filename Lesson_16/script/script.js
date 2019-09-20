window.addEventListener('DOMContentLoaded', function () {
	'use strict';


	//Таймер 
	function countTimer(deadLine) {
		let timerHours = document.querySelector('#timer-hours'),
			timerMinuts = document.querySelector('#timer-minutes'),
			timerSeconds = document.querySelector('#timer-seconds');


		function getTimeRemaining() {
			let dateStop = new Date(deadLine).getTime(),
				dateNow = new Date().getTime(),
				timeRemaining = (dateStop - dateNow) / 1000,
				seconds = Math.floor(timeRemaining % 60),
				minutes = Math.floor((timeRemaining / 60) % 60),
				hours = Math.floor(timeRemaining / 60 / 60);
			// days = Math.floor(timeRemaining / 60 / 60 / 24);  % 24
			return {
				timeRemaining,
				hours,
				minutes,
				seconds
			}
		}

		function updateClock() {
			let timer = getTimeRemaining()

			let leadingZero = function (n) {
				if (n < 10 && n >= 0)
					return '0' + n;
				else
					return n;
			};

			timerHours.textContent = leadingZero(timer.hours);
			timerMinuts.textContent = leadingZero(timer.minutes);
			timerSeconds.textContent = leadingZero(timer.seconds);

			if (timer.timeRemaining > 0) {
				setInterval(updateClock, 1000);
			}
		}

		updateClock()

		function fixClock() {
			let timerContainer = document.querySelector('.timer-numbers');
			if (timerHours.textContent < 0 || timerMinuts.textContent < 0 || timerSeconds.textSeconds < 0) {
				timerHours.textContent = '00';
				timerMinuts.textContent = '00';
				timerSeconds.textContent = '00';
				timerContainer.style.color = 'red';
				clearInterval(updateClock);
			}
		}
		fixClock();
	};

	// Меню
	const toggleMenu = () => {
		const
			body = document.querySelector('body'),
			menu = document.querySelector('menu');

		body.addEventListener('click', (event) => {
			let target = event.target;
			if (target.classList.contains('close-btn') || target.matches('a') || !target.matches('.active-menu') && !target.matches('.menu') && !target.matches('small')) {
				menu.classList.remove('active-menu');
			} else if (target.matches('.menu') || target.matches('small') || target.matches('img')) {
				menu.classList.add('active-menu');
			}

		});
	};

	// Поппап 
	const togglePopup = () => {
		const popUp = document.querySelector('.popup'),
			popUpBtn = document.querySelectorAll('.popup-btn');

		popUpBtn.forEach((item) => {
			item.addEventListener('click', () => {
				if (window.innerWidth > 375) {
					popUp.classList.toggle('popup-active');
				}
			});
		});
		popUp.addEventListener('click', (event) => {
			let target = event.target;

			if (target.classList.contains('popup-close')) {
				popUp.classList.remove('popup-active');
			} else {
				target = target.closest('.popup-content');
				if (!target) {
					popUp.classList.remove('popup-active');
				}
			}
		});

	};
	//табы
	const tabs = () => {
		const tabHeader = document.querySelector('.service-header'),
			tab = tabHeader.querySelectorAll('.service-header-tab'),
			tabContent = document.querySelectorAll('.service-tab');

		//Делигируем обработчик событий
		const toggleContent = (index) => {
			for (let i = 0; i < tabContent.length; i++) {
				// Улсовие, где мы переключаем активный таб и меняем контент
				if (index === i) {
					tab[i].classList.add('active');
					tabContent[i].classList.remove('d-none');
				} else {
					tab[i].classList.remove('active');
					tabContent[i].classList.add('d-none');
				}
			}
			// 12:44
			// 12:44
			// 12:44
		};
		// Определяем, куда осуществлсяетя клик
		tabHeader.addEventListener('click', (event) => {
			// Определяем цель клика
			let target = event.target;
			target = target.closest('.service-header-tab');

			if (target) {
				// i - индекс
				tab.forEach((item, i) => {
					if (item === target) {
						// Связваем обработчик событий
						toggleContent(i);
					}
				});
			}

		});
	};
	// Слайдер 
	const slider = () => {
		const slide = document.querySelectorAll('.portfolio-item'),
			btn = document.querySelectorAll('.portfolio-btn'),
			dot = document.querySelectorAll('.dot'),
			slider = document.querySelector('.portfolio-content');

		let currentSlide = 0,
			interval;

		const prevSlide = (elem, index, strClass) => {
			elem[index].classList.remove(strClass);
		};
		const nextSlide = (elem, index, strClass) => {
			elem[index].classList.add(strClass);
		};

		const autoPlaySlide = () => {


			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');
			currentSlide++;
			if (currentSlide >= slide.length) {
				currentSlide = 0;
			}
			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');

		};
		const startSlide = (time = 3000) => {
			interval = setInterval(autoPlaySlide, time);
		};

		const stopSlide = () => {
			clearInterval(interval);
		};
		slider.addEventListener('click', (event) => {
			event.preventDefault();
			let target = event.target;
			if (!target.matches('.portfolio-btn, .dot')) {
				return;
			};
			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');

			if (target.matches('#arrow-right')) {
				currentSlide++;
			} else if (target.matches('#arrow-left')) {
				currentSlide--;
			} else if (target.matches('.dot')) {
				dot.forEach((elem, index) => {
					if (elem === target) {
						currentSlide = index;
					}
				});
			}

			if (currentSlide >= slide.length) {
				currentSlide = 0;
			}
			if (currentSlide < 0) {
				currentSlide = slide.length - 1;
			}

			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');
		});

		slider.addEventListener('mouseover', (event) => {
			if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
				stopSlide();
			}
		});
		slider.addEventListener('mouseout', (event) => {
			if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
				startSlide();
			}
		});

		startSlide(1500);

	};

	const changePhoto = () => {
		const commandPhotos = document.querySelectorAll('.command__photo');
		commandPhotos.forEach((item, index) => {
			item.addEventListener('mouseenter', (event) => {
				event.target.src = event.target.dataset.img;
			});
			item.addEventListener('mouseleave', (event) => {
				event.target.src = `./images/command/command-${index + 1}.jpg`;
			});
		});
	};

	const inputValidation = () => {
		const calcBlock = document.querySelector('.calc-block'),
			calcBlockInput = calcBlock.querySelectorAll('input');
		calcBlockInput.forEach((item) => {
			item.addEventListener('input', () => {
				item.value = item.value.replace(/\e/g, '');

			});
		});

	};
	// Калькулятор 
	const calc = (price = 100) => {
		const calcBlock = document.querySelector('.calc-block'),
			calcType = document.querySelector('.calc-type'),
			calcSquere = document.querySelector('.calc-square'),
			calcDay = document.querySelector('.calc-day'),
			calcCount = document.querySelector('.calc-count'),
			totalValue = document.getElementById('total');
	
		const countSum = () => {
			let total = 0,
				countValue = 1,
				dayValue = 1;
			const typeValue = calcType.options[calcType.selectedIndex].value,
				squereValue = +calcSquere.value;

			if (calcCount.value > 1) {
				countValue += (calcCount.value - 1) / 10;
			}

			if (calcDay.value && calcDay.value < 5) {
				dayValue *= 2;
			} else if (calcDay.value && calcDay.value < 10) {
				dayValue *= 1.5;
			}


			if (typeValue && squereValue) {
				total = price * typeValue * squereValue * countValue * dayValue;
			} 


			totalValue.textContent = total;
		};

		calcBlock.addEventListener('change', (event) => {
			const target = event.target;

			if (target.matches('select') || target.matches('input')) {
				countSum();
			}
		});


	};
	calc(100);
	inputValidation();
	slider();
	changePhoto();
	tabs();
	togglePopup();
	toggleMenu();
	countTimer('13 september 2019');
});