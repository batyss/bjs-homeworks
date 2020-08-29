"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    
    try {
    	Number.percent();
    } catch {
    	if (isNaN(percent)) {
    	return `Параметр "процентная ставка" содержит неправильное значение ${percent}`;
		} 
	}

	try {
    	Number.contribution();
    } catch {
    	if (isNaN(contribution)) {
    	return `Параметр "сумма первоначального взноса" содержит неправильное значение ${contribution}`;
		} 
	}

	try {
    	Number.amount();
    } catch {
    	if (isNaN(amount)) {
    	return `Параметр "сумма кредита" содержит неправильное значение ${amount}`;
		} 
	}
    
    
	if (contribution === amount) {
    	return 0;
    } else {
    	let loanBody = amount - contribution;
    	let time = date.getMonth() - new Date().getMonth() + (12 * (date.getFullYear() - new Date().getFullYear()));
    	let creditRate = percent / 100;	
    	let paymentPerMonth = loanBody*(creditRate/12 + creditRate/12/(((1 + creditRate/12) ** time) - 1));
    	let totalPayment = paymentPerMonth * time;
    	console.log(totalPayment.toFixed(2));
        return Number(totalPayment.toFixed(2));
    }
    
}

function getGreeting(name) {
    if (!name || name !== String(name)) {
    	return 'Привет, мир! Меня зовут Аноним'
    } else {
    	return `Привет, мир! Меня зовут ${name}`
    }
}