/*jshint esversion: 6 */
// расскрытие блоков под карточкам 
const moreBlocks = () => {
	const addMoreBlock = document.querySelector('.add-sentence-btn'),
		sentenceBlocks = document.querySelectorAll('.sentence .col-xs-12');

	addMoreBlock.addEventListener('click', () => {

		addMoreBlock.style.cssText = `display: none;`;
		sentenceBlocks.forEach((item) => {
			item.classList.remove('hidden');
			item.classList.remove('visible-sm-block');
		});

	});

};
export default moreBlocks;