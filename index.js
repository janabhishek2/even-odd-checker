const isEven = (num) => {
	if(typeof num !== "number"){
		return false;
	} else if(num % 2 === 0){
		return true;
	} else{
		return false;
	}
}
const isOdd = (num) => {
	if(typeof num !== "number"){
		return false;
	} else if(num % 2 !== 0 && num !== 1){
		return true;
	} else{
		return false;
	}
}

module.exports = {
	isEven,
	isOdd
}
