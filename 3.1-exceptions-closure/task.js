"use strict";
// задача 1
function parseCount(value) {
	if (isNaN(parseInt(value)) || value === undefined) {
		const validateError = new Error ("Невалидное значение");
		throw validateError; 
	} else {
		return parseInt(value);
	}
} 

function validateCount(value) {
	try {
		return parseCount(value);
	} catch {
		const validateError = new Error ("Невалидное значение");
		return validateError;
	}
}

// задача 2
class Triangle {
	constructor(a,b,c) {
		this.a = a;
		this.b = b;
		this.c = c;

		if ((a + b) < c || (a + c) < b || (b + c) < a) {
			const validateError = new Error ("Треугольник с такими сторонами не существует");
			throw validateError;
		} 
	}
	getPerimeter() {
		return this.a + this.b + this.c;
	}
	getArea() {
		const p = this.getPerimeter() / 2;
		const area = +(Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c)).toFixed(3));
		return area;	
	}
}

function getTriangle(a,b,c) {
	try {
		return new Triangle(a,b,c);
	} catch {
		const objReplace = {
			getPerimeter() {return 'Ошибка! Треугольник не существует'},
			getArea() {return 'Ошибка! Треугольник не существует'}
		};
		return objReplace;
	}
}