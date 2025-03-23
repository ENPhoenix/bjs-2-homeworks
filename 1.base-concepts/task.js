"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = Math.pow(b, 2) - 4 * a * c;
	if (discriminant < 0) {
		return arr;
	}
	let root1, root2;
	if (discriminant === 0) {
		root1 = -b / (2 * a);
		arr.push(root1);
	} else {
		root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(root1, root2);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthlyRate = (percent / 100) / 12;
	let loanBody = amount - contribution;
	let monthlyPayment = loanBody * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));
	let totalAmount = monthlyPayment * countMonths;
	return Number(totalAmount.toFixed(2));
}