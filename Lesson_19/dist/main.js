!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var n=()=>{const e=document.querySelector("body"),t=document.querySelector("menu");e.addEventListener("click",e=>{let o=e.target;o.classList.contains("close-btn")||o.matches("a")||!o.matches(".active-menu")&&!o.matches(".menu")&&!o.matches("small")?t.classList.remove("active-menu"):(o.matches(".menu")||o.matches("small")||o.matches("img"))&&t.classList.add("active-menu")})};var r=()=>{const e=document.querySelector(".popup");document.querySelectorAll(".popup-btn").forEach(t=>{t.addEventListener("click",()=>{window.innerWidth>375&&e.classList.toggle("popup-active")})}),e.addEventListener("click",t=>{let o=t.target;o.classList.contains("popup-close")?e.classList.remove("popup-active"):(o=o.closest(".popup-content"))||e.classList.remove("popup-active")})};var c=()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",e=>{let n=e.target;(n=n.closest(".service-header-tab"))&&t.forEach((e,r)=>{e===n&&(e=>{for(let n=0;n<o.length;n++)e===n?(t[n].classList.add("active"),o[n].classList.remove("d-none")):(t[n].classList.remove("active"),o[n].classList.add("d-none"))})(r)})})};var a=()=>{const e=document.querySelectorAll(".portfolio-item"),t=(document.querySelectorAll(".portfolio-btn"),document.querySelectorAll(".dot")),o=document.querySelector(".portfolio-content");let n,r=0;const c=(e,t,o)=>{e[t].classList.remove(o)},a=(e,t,o)=>{e[t].classList.add(o)},l=()=>{c(e,r,"portfolio-item-active"),c(t,r,"dot-active"),++r>=e.length&&(r=0),a(e,r,"portfolio-item-active"),a(t,r,"dot-active")},s=(e=3e3)=>{n=setInterval(l,e)};o.addEventListener("click",o=>{o.preventDefault();let n=o.target;n.matches(".portfolio-btn, .dot")&&(c(e,r,"portfolio-item-active"),c(t,r,"dot-active"),n.matches("#arrow-right")?r++:n.matches("#arrow-left")?r--:n.matches(".dot")&&t.forEach((e,t)=>{e===n&&(r=t)}),r>=e.length&&(r=0),r<0&&(r=e.length-1),a(e,r,"portfolio-item-active"),a(t,r,"dot-active"))}),o.addEventListener("mouseover",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(n)}),o.addEventListener("mouseout",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&s()}),s(1500)};var l=()=>{document.querySelectorAll(".command__photo").forEach((e,t)=>{e.addEventListener("mouseenter",e=>{e.target.src=e.target.dataset.img}),e.addEventListener("mouseleave",e=>{e.target.src=`./images/command/command-${t+1}.jpg`})})};var s=()=>{document.querySelector(".calc-block").querySelectorAll("input").forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/\e/g,"")})})};var u=(e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),r=document.querySelector(".calc-day"),c=document.querySelector(".calc-count"),a=document.getElementById("total");t.addEventListener("change",t=>{const l=t.target;(l.matches("select")||l.matches("input"))&&(()=>{let t=0,l=1,s=1;const u=o.options[o.selectedIndex].value,i=+n.value;c.value>1&&(l+=(c.value-1)/10),r.value&&r.value<5?s*=2:r.value&&r.value<10&&(s*=1.5),u&&i&&(t=e*u*i*l*s),a.textContent=t})()})};var i=()=>{document.querySelectorAll("form").forEach(e=>{const t=document.createElement("div");t.style.cssText="font-size: 2rem;";const o=document.querySelectorAll(".form-phone"),n=document.querySelectorAll("#name, #message");o.forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/[^0-9\\+]/,"")})}),n.forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/[^а-яА-Я]/,"")})}),e.addEventListener("submit",o=>{o.preventDefault(),e.appendChild(t);const n=new FormData(e);let r={};n.forEach((e,t)=>{r[t]=e});(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(r).then(e=>{if(200!==e.status)throw new Error("status network not 200");console.log(e),t.textContent="Спасибо! Мы скоро с вами свяжемся!"}).catch(()=>{t.textContent="Что-то пошло не так..."})})})};(function(e){let t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds");function r(){let c=function(){let t=(new Date(e).getTime()-(new Date).getTime())/1e3,o=Math.floor(t%60),n=Math.floor(t/60%60);return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:n,seconds:o}}(),a=function(e){return e<10&&e>=0?"0"+e:e};t.textContent=a(c.hours),o.textContent=a(c.minutes),n.textContent=a(c.seconds),c.timeRemaining>0&&setInterval(r,1e3)}r(),function(){let e=document.querySelector(".timer-numbers");(t.textContent<0||o.textContent<0||n.textSeconds<0)&&(t.textContent="00",o.textContent="00",n.textContent="00",e.style.color="red",clearInterval(r))}()})("13 september 2019"),n(),r(),c(),a(),l(),s(),u(100),i()}]);