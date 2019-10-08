// 'use strict';
/*jshint esversion: 6 */

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import elementClosest from 'element-closest';

elementClosest(window);

import popUp from './modules/popUp';
import inputValidation from './modules/inputValidation';
import moreBlocks from './modules/moreBlocks';
import accordion from './modules/accordion';
import calculator from './modules/calculator';



// Вызов попапов
popUp();

// Валидация инпутов
inputValidation();

// расскрытие блоков под карточкам 
moreBlocks();

// Переключение аккардиона
accordion();

// Калькулятор / отправление fetch запроса
calculator();
