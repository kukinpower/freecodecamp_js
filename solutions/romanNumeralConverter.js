// Convert the given number into a roman numeral.
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

function convertToRoman(num) {
	let romanNumeric = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 
						'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C', 'CC', 
						'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M', 'MM', 'MMM', 
						'MMMM', 'MMMMM', 'MMMMMM', 'MMMMMMM', 'MMMMMMMM', 'MMMMMMMMM'];
	
	let arr = [];
	if (num >= 1000)
	{
		arr.push(romanNumeric[Math.floor(num / 1000) - 4 + 30]);
		num %= 1000;
	} 
	if (num >= 100)
	{
		arr.push(romanNumeric[Math.floor(num / 100) - 3 + 20]);
		num %= 100;
	}
	if (num >= 10)
	{
		arr.push(romanNumeric[Math.floor(num / 10) - 2 + 10]);
		num %= 10;
	}
	if (num >= 1)
		arr.push(romanNumeric[num - 1]);
	let str = arr.join("");
	return str;
  }
