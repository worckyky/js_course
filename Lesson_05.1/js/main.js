
console.log('Первое задание');
let arr = [12341, 23412, 24, 435, 2671, 56, 75];


arr.forEach(em => {
  if (String(em).search(/(2|4)/) === 0) console.log(em);
})


console.log('–––––––––––––––––––––––––––––––––––––––––––');



console.log('Второе задание');

let n = 100;

nextStep: for (let i = 2; i <= n; i++) {
	for (let j = 2; j < i; j++) {
		if (i % j == 0) continue nextStep;
	}
	console.log(i + ' Делители этого числа - ' + '1' + ' и ' + i);
}