"use strict";

// задача 1
function getSolutions(a,b,c) {
	let D = b ** 2 - 4*a*c;
	let x1, x2;
	if (D < 0) {
    	return {D: D, roots: []};
    } else if (D === 0) {
    	x1 = -b/(2*a);
    	return {D: D, roots: [x1]};
    } else if (D > 0) {
    	x1 = (-b + Math.sqrt(D))/(2*a);
    	x2 = (-b - Math.sqrt(D))/(2*a);
    	return {D: D, roots: [x1, x2]};
    }
}

function showSolutionsMessage(a,b,c) {
	let result = getSolutions(a,b,c);
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`);
	if (result.D < 0) {
		console.log(`Уравнение не имеет вещественных корней`);
	} else if (result.D === 0) {
		console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
	} else if (result.D > 0) {
		console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
	}
}

// задача 2
function getAverageScore(data) {
	
	let totalAverage = 0;
	let i = 0;
	for (let prop in data) {
		let value = getAverageMark(data[prop]);
		data[prop] = value;
		totalAverage += data[prop];
		i++;
	}
	
	if (i === 0) {
		data.average = 0;
	} else {
		data.average = totalAverage/i;
	}

	return data;
}


function getAverageMark(marks) {
	if (marks.length === 0) {
    	return 0;
    } 
        
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    
    return sum / marks.length;
}

// задача 3
function getPersonData(secretData) {
	let keyData = {
		firstName: getDecodedValue(secretData.aaa),
		lastName: getDecodedValue(secretData.bbb)};
	return keyData;
}

function getDecodedValue(secret) {
	if (secret === 0) {
		return 'Родриго';
	} else if (secret === 1) {
		return 'Эмильо';
	}
}