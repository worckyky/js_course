// Смена фотографий при наведении
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
export default changePhoto;