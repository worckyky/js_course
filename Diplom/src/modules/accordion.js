/*jshint esversion: 6 */
// Переключение аккардиона
const accordion = () => {
	const accordionBlockTwo = document.querySelector('#accordion-two'),
		tabPanel = accordionBlockTwo.querySelectorAll('.panel-heading'),
		tabContent = accordionBlockTwo.querySelectorAll('.panel-collapse');


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
	accordionBlockTwo.addEventListener('click', (event) => {
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
};
export default accordion;