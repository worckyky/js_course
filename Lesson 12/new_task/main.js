'use strict';

const container = document.createElement('ul');
const body = document.querySelector('body');
const date = new Date();
body.appendChild(container);
body.style.cssText = 'display: flex; height: 100vh; justify-content: center; align-items: center;';
container.style.cssText = `list-style: none; 
font-style: italic; 
font-weight: 100; 
border-left: 3px solid #eee;
background-color: rgba(226, 226, 226, 0.12);
padding: 24px; `;


let dataInfo = {
	timeOfDay: container.appendChild(document.createElement('li')),
	todayDay: container.appendChild(document.createElement('li')),
	todayTime: container.appendChild(document.createElement('li')),
	newYear: container.appendChild(document.createElement('li')),
	getTimeOfDay: function () {
		if (date.getHours() >= 17 || date.getHours() <= 4) {
			return 'Добрый вещер';
		} else {
			return 'Добрый день';
		}
	},
	getTodayDay: function () {
		if (date.getDay() === 0) {
			return 'Воскресенье';
		}
		if (date.getDay() === 1) {
			return 'Понедельник';
		}
		if (date.getDay() === 2) {
			return 'Вторник';
		}
		if (date.getDay() === 3) {
			return 'Среда';
		}
		if (date.getDay() === 4) {
			return 'Четверг';
		}
		if (date.getDay() === 5) {
			return 'Пятница';
		}
		if (date.getDay() === 6) {
			return 'Суббота';
		}
	},
	fixTimeZero: function (n) {
		if (n < 10 && n >= 0)
			return '0' + n;
		else
			return n;
	},
	formatAMPM: function (date) {
		let hours = date.getHours(),
			minutes = date.getMinutes(),
			seconds = date.getSeconds(),
			ampm = hours >= 12 ? 'PM' : 'AM';
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		minutes = minutes < 10 ? '0' + minutes : minutes;
		let strTime = 'Текущее время: ' + this.fixTimeZero(hours) + ':' + this.fixTimeZero(minutes) + ':' + this.fixTimeZero(seconds) + ' ' + ampm;
		return strTime;
	},
	newYearCount: function () {
		let dayNow = date.getTime(),
			nextNewYear = new Date('January 1 2020').getTime(),
			timeRemaining = (nextNewYear - dayNow) / 1000,
			days = Math.floor(timeRemaining / 60 / 60 / 24);
		return days
	},



	getItAll: function () {
		this.timeOfDay.textContent = this.getTimeOfDay();
		this.todayDay.textContent = 'Сегодня: ' + this.getTodayDay();
		this.todayTime.textContent = this.formatAMPM(date);
		this.newYear.textContent = 'До нового года осталось '+ this.newYearCount() + ' Дней';
	},

}

dataInfo.getItAll();