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

			var leadingZero = function (n) {
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
		const btnMenu = document.querySelector('.menu'),
			menu = document.querySelector('menu'),
			closeBtn = document.querySelector('.close-btn'),
			menuItems = menu.querySelectorAll('ul > li');

			let actionMenu = () => {
				menu.classList.toggle('active-menu'); 
			}

		btnMenu.addEventListener('click', () => {
			actionMenu();
		});
		closeBtn.addEventListener('click', () => {
			actionMenu();
		});

		menuItems.forEach((item) => {
			item.addEventListener('click' , () => {
				actionMenu();
			});
		}) 
		

	}
	// Поппап 
	const togglePopup = () => {
		const popUp = document.querySelector('.popup'),
					popUpBtn = document.querySelectorAll('.popup-btn'),
					popUpClose = document.querySelector('.popup-close');

		popUpBtn.forEach((item) => {
			item.addEventListener('click' , () =>{
				if (window.innerWidth > 375){ 
					popUp.classList.toggle('popup-active');
				}
			});
		});
		popUpClose.addEventListener('click' , () =>{
			popUp.classList.remove('popup-active');
		});


	};
	togglePopup();
	toggleMenu();
	countTimer('13 september 2019');
});