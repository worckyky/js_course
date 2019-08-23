let num = 266219,
		str = String(num).split('');

console.log(str);

let result = str[0]*str[1]*str[2]*str[3]*str[4]*str[5];

console.log(result);

// console.log(Math.pow(result, 3));

let anotherResult = result ** 3 ;

console.log(anotherResult);

console.log(String(anotherResult).split(''));
console.log((String(anotherResult).split('').slice(0, 2)).join(''));



