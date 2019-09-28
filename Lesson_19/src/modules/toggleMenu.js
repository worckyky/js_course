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
	export default toggleMenu;