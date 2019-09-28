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
	export default tabs;