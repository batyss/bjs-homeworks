'use strict';
// задача 1
class PrintEditionItem {
	
	constructor(name,releaseDate,pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	
	fix() {
		this.state = this.state*1.5;
	}
	
	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;	
		}
	}
	
	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name,releaseDate,pagesCount) {
		super(name,releaseDate,pagesCount);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author,name,releaseDate,pagesCount) {
		super(name,releaseDate,pagesCount);
		this.type = 'book';
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author,name,releaseDate,pagesCount) {
		super(author,name,releaseDate,pagesCount);
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(author,name,releaseDate,pagesCount) {
		super(author,name,releaseDate,pagesCount);
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(author,name,releaseDate,pagesCount) {
		super(author,name,releaseDate,pagesCount);
		this.type = 'detective';
	}
}

// задача 2
class Library {
	
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		
		if (book.state > 30) {
			this.books[this.books.length] = book;
		}
	}

	findBookBy(type,value) {
		
		for (let item in this.books) {
			if (this.books[item][type] === value) {
				return this.books[item];
			}
		}
		return null;
	}

	giveBookByName(bookName) {
		
		if (!bookName) {
			return
		}

		for (let item in this.books) {
			if (this.books[item].name === bookName) {
				return this.books.splice(this.books.indexOf(this.books[item],0),1);
			} 
		}

		return null;
	} 
} 

// задача 3
class StudentLog {
		
	constructor(studentName) {
		this.name = studentName;
		this.marks = {};
	}

	getName(studentName) {
		return this.name;
	}
		
	addGrade(grade,subject) {
		if (!this.marks[subject]) {
			this.marks[subject] = [];
		}	
		if (isNaN(grade) || grade < 1 || grade > 5) {
			console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5`);
		} else {
			this.marks[subject][this.marks[subject].length] = grade;
			}
		return this.marks[subject].length;
	}

	getAverageBySubject(subject) {
		if (!this.marks[subject] || !this.marks[subject].length) {
			return 0;
		} else {
			let sum = 0;
    		for (let i = 0; i < this.marks[subject].length; i++) {
      			sum += this.marks[subject][i];
    	}
        	return sum / this.marks[subject].length;
		}
	}

	getTotalAverage() {
		
		let totalAverage = 0, i = 0;
		
		for (let prop in this.marks) {
			let value = this.getAverageBySubject([prop]);
			if (value === 0) {
				break
			} else {
				totalAverage += value;
				i++;
			}
		}
	
		if (totalAverage === 0) {
			return 0
		} else {
			return totalAverage/i;
		}
	} 
}