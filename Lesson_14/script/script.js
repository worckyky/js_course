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
			if (target.classList.contains('close-btn') || target.matches('a') || !target.matches('.active-menu') && !target.matches('.menu') && !target.matches('small') && !target.matches('img')) {
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
		// popUpClose.addEventListener('click', () => {
		// 	popUp.classList.remove('popup-active');
		// });
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

	tabs();
	togglePopup();
	toggleMenu();
	countTimer('13 september 2019');
});