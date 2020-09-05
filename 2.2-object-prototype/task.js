"use strict";
// задача 1
String.prototype.isPalindrome = function() {
	let phrase = this.toLowerCase().replace(/ /g, '');
	return phrase == phrase.split('').reverse().join('');
}

// задача 2
function getAverageMark(marks) {
    
	if (marks.length === 0) {
    	return 0;
    } else {
    	let sum = 0;
    
    	for (let i = 0; i < marks.length; i++) {
      		sum += marks[i];
    	}

    	let average = sum / marks.length;
    	let roundedAverage = Math.round(average);
    	return roundedAverage;
    }
}

// задача 3
function checkBirthday(birthday) {
    let now = Date.now();
    let Birthday = new Date(birthday);
    let diff = now - +Birthday;
    let age = diff / (365.25*86400000);
    return age >= 18;
}