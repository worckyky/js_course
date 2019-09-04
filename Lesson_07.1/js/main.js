let listElement = document.querySelector('li'),
	input = document.querySelector('input'),
	param = input.value,
	button = document.querySelector('button');



	button.addEventListener('click', function () {
		let list = document.querySelector('ul');
		listElementPlus = document.createElement('li');
		list.appendChild(listElementPlus);
		listElementPlus.innerHtml = param;
	
	});




// add = function () {

// }

