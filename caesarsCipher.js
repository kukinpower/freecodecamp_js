function rot13(str) {
	let arr = str.split("");
	for (let i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90)
			arr[i] = str.charCodeAt(i);
		else if (str.charCodeAt(i) + 13 > 90)
			arr[i] = 64 + str.charCodeAt(i) + 13 - 90;
		else
			arr[i] = str.charCodeAt(i) + 13;
	}
	return String.fromCharCode(...arr);
}
