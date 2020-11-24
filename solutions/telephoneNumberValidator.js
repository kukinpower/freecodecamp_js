// Return true if the passed string looks like a valid US phone number.
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

function telephoneCheck(str) {
	let regExp = /^[1]?\ ?(\([0-9]{3}\)|[0-9]{3})\ ?\-?[0-9]{3}[ -]?[0-9]{4}$/gm;
	return regExp.test(str);
}

telephoneCheck("555-555-5555");

/*
Valid numbers:
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
1 555-555-5555
1 (555) 555-5555
(555)555-5555
1(555)555-5555
1 555 555 5555
1 456 789 4444 

Not valid:
1 555)555-5555
(6054756961)
2 (757) 622-7382
0 (757) 622-7382
-1 (757) 622-7382
2 757 622-7382
10 (757) 622-7382
27576227382
(275)76227382
2(757)6227382
2(757)622-7382
555)-555-5555
(555-555-5555
*/
