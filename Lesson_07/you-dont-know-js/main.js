
let bookContainer = document.querySelectorAll('aside')[0],
		book = document.querySelectorAll('.book'),
		advBanner = document.querySelector('.adv'),
		body = document.querySelector('body');


advBanner.setAttribute('class' , 'display : none;');
body.style.backgroundImage='url(./image/open_magic_book.jpg)';
document.querySelector('h1').style.color=('#ffffff');

bookContainer.insertBefore(book[1], book[0]);
bookContainer.insertBefore(book[2], null);
bookContainer.insertBefore(book[4], book[3]);

book[4].querySelector('h2 a').textContent = "Книга 3. this и Прототипы Объектов";



let twoBookContentList = document.querySelectorAll('ul')[1],
		twoBookContentListContent = twoBookContentList.querySelectorAll('li');


twoBookContentList.insertBefore(twoBookContentListContent[4], null);
twoBookContentList.insertBefore(twoBookContentListContent[5], null);
twoBookContentList.insertBefore(twoBookContentListContent[7], null);
twoBookContentList.insertBefore(twoBookContentListContent[9], null);
twoBookContentList.insertBefore(twoBookContentListContent[2], null);
twoBookContentList.insertBefore(twoBookContentListContent[10], null);

let fiveBookContentList = document.querySelectorAll('ul')[4],
		fiveBookContentListContent = fiveBookContentList.querySelectorAll('li');



fiveBookContentList.insertBefore(fiveBookContentListContent[3], null);
fiveBookContentList.insertBefore(fiveBookContentListContent[4], null);
fiveBookContentList.insertBefore(fiveBookContentListContent[2], null);
fiveBookContentList.insertBefore(fiveBookContentListContent[6], null);
fiveBookContentList.insertBefore(fiveBookContentListContent[7], null);
fiveBookContentList.insertBefore(fiveBookContentListContent[5], null);
fiveBookContentList.insertBefore(fiveBookContentListContent[8], null);
fiveBookContentList.insertBefore(fiveBookContentListContent[10], null);

let sixBookContentList = document.querySelectorAll('ul')[5],
		sixBookContentListContent = sixBookContentList.querySelectorAll('li'),
		bookElemClone = sixBookContentListContent[8].cloneNode(1),
		newBookElement = sixBookContentList.appendChild(bookElemClone).textContent = "Глава 8: За пределами ES6";

sixBookContentList.insertBefore(sixBookContentListContent[9], sixBookContentListContent[7] )
sixBookContentList.insertBefore(sixBookContentListContent[9], null )

		