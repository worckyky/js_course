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
	export default togglePopup;