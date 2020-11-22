// Return true if the given string is a palindrome. Otherwise, return false.
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

// solution 1:
function palindrome(str) {
	str = str.replace(/[^A-Za-z0-9]/g, '');
	str = str.toLowerCase();
	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] != str[str.length - i - 1])
			return false;
	}
	return true;
}
  
// solution 2:
function palindrome(str) {
	let firstHalf;
	let secondHalf;
	str = str.replace(/[^A-Za-z0-9]/g, '');

	if (str.length % 2 == 0) {
		firstHalf = str.slice(0, str.length / 2);
		secondHalf = str.slice(str.length / 2, str.length);
	} else {
		firstHalf = str.slice(0, str.length / 2);
		secondHalf = str.slice(str.length / 2 + 1, str.length);
	}
	secondHalf = secondHalf.split(""); 
	secondHalf = secondHalf.reverse();
	secondHalf = secondHalf.join("");
	if (firstHalf.toLowerCase() === secondHalf.toLowerCase())
		return true;
	return false;
}