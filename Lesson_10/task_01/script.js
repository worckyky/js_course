let newDiv = document.createElement('div'),
	newParagraph = document.createElement('p'),
	newBody = document.querySelector('body');

function DomElement(selector, height, width, bg, fontSize) {
	this.selector = selector,
		this.height = height,
		this.width = width,
		this.bg = bg,
		this.fontSize = fontSize
	this.method = function () {
		if (/^[.]/.test(this.selector)) {
			newBody.appendChild(newDiv).style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
			newDiv.innerHTML = 'какой-то текст';

		} else if (/^#/.test(this.selector)) {
			newBody.appendChild(newParagraph).style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
			newParagraph.innerHTML = 'какой-то текст';
		}
	}

};

let someClass = new DomElement('.', '30px', '90px', 'green', '14px');

someClass.method();

