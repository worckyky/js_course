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

			var leadingZero = function(n) {
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
			if (timerHours.textContent < 0 || timerMinuts.textContent < 0 || timerSeconds.textSeconds < 0) {
				timerHours.textContent = '00' ;
				timerMinuts.textContent = '00' ;
				timerSeconds.textContent = '00' ;
				clearInterval(updateClock);
			} 
		}
		fixClock();
	};
	
	countTimer('13 september 2019');
});


