# even-odd-checker
To check if number is even or odd , publishing on npm.

# How to use 
 
 ## 2 methods are exported by name (isEven, isOdd) 
	
 const { isEven, isOdd } = require('even-odd-checker');

 ## If input is not of type number

 isEven("abcd") // returns false

 ## If input is even

 isEven(12) // returns true
 isOdd(12) // returns false

 ## If input is odd

 isOdd(3) // returns true
 isEven(3) // returns false

 ## If input is 1 - neither even nor odd

 isOdd(1) // returns false
 isEven(1) // returns false