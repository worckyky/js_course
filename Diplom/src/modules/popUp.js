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
export default popUp;