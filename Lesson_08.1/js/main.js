let listElement = document.querySelector('li'),
	input = document.querySelector('input'),
	param = input.value,



	button = document.querySelector('button');

add = function () {
	let list = document.querySelector('ul');
	listElementPlus = document.createElement('li');
	list.appendChild(listElementPlus);

}


button.addEventListener('click', function () {
	listElementPlus.innerHtml = param;
}); 