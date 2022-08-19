const isEvenOrOdd = (num) => {
	if(typeof num !== "number"){
		console.log('Not a number' ,typeof num);
		return;
	} else if(num % 2 === 0){
		console.log('Even number');
	} else{
		console.log('Odd Number')
	}
}

module.exports = isEvenOrOdd
