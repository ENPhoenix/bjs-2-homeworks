function getArrayParams(...arr) {
	const min = Math.min(...arr);
	const max = Math.max(...arr);
	const sum = arr.reduce((acc, num) => acc + num, 0);
	const avg = parseFloat((sum / arr.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	return arr.reduce((acc, num) => acc + num, 0);
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	const min = Math.min(...arr);
	const max = Math.max(...arr);
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		const num = arr[i];
		if (num % 2 === 0) {
			sumEvenElement += num;
		} else {
			sumOddElement += num;
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let countEvenElement = 0;


	for (let i = 0; i < arr.length; i++) {
		const num = arr[i];
		if (num % 2 === 0) {
			sumEvenElement += num;
			countEvenElement++;
		}
	}
	if (countEvenElement === 0) {
		return 0;
	}
	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;


	for (let i = 0; i < arrOfArr.length; i++) {
		const currentArr = arrOfArr[i];
		const result = func(...currentArr);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}

	return maxWorkerResult;
}