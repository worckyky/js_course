'use strict';

import 'nodelist-foreach-polyfill';
import '@babel/polyfill';
import elementClosest from 'element-closest';
elementClosest(window);


import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/toggleTabs';
import slider from './modules/slider';
import changePhoto from './modules/photoChanger';
import inputValidation from './modules/inputValidation';
import calc from './modules/calculatorBlock';
import sendForm from './modules/sendForm';


//Таймер 
countTimer('30 september 2019');
// Меню
toggleMenu();
// Поппап 
togglePopup();
//Табы
tabs();
// Слайдер 
slider();
// Смена фотографий при наведении
changePhoto();
//Валидация некоторых инпутов
inputValidation();
// Калькулятор 
calc(100);
// Отправка ajax запроса 
sendForm();
