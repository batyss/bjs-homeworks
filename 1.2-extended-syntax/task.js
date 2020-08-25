"use strict";
function getResult(a,b,c) {
    let d = b ** 2 - 4*a*c;
    if (d < 0) {
    	return [];
    } else if (d === 0) {
    	return [-b/(2*a)];
    } else if  (d > 0) {
    	return [(-b + Math.sqrt(d))/(2*a), (-b - Math.sqrt(d))/(2*a)];
    }
}

function getAverageMark(marks) {
     if (marks.length <= 0) {
    	return 0;
    } else if (marks.length > 5) {
    	console.log('Вы ввели слишком много оценок, максимальное количество - 5');
    	marks.splice(5, 50);
    }
    
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    
    return sum / marks.length;
}

function askDrink(name,dateOfBirthday) {
    let today = new Date();
    let year = today.getFullYear() - dateOfBirthday.getFullYear();
    let message;
    if (year > 18) {
      message = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
      message = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    return message;
}