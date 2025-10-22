// Create an array of numbers to test
const arrayOfNumbers = [
  190, 20 ,5 ,7 ,5 ,6 ,7 ,8 ,9 ,9 ,7 
]


// Function to check if array has both high (>10) and low (<5) numbers
function hasHighOrLow (numbers){
  let hasHighNumber = false // Deaclare Varible to has a high number(greater than 10)
  let hasLowNumber = false  // Declare varible to has a low number(less than 5)
  
// Loop through each number in the array
for( let i = 0; i < numbers.length; i++ ) {
  if(numbers[i] > 10){      // Check if current number is greater than 10
    hasHighNumber = true    // Redeclare HasHighNumber to true if we found a number greater than 10
  }
  if(numbers[i] < 5){       // Check if current number is less than 5
    hasLowNumber = true     // redeclare hasLowNumber to true if we found a number less than 5
  }
 }
return hasHighNumber && hasLowNumber // Return true only if both conditions are met
}

// Call the function and print the result to console
console.log(hasHighOrLow(arrayOfNumbers)) 


//My approach to this exercise was to create a function that checks if an array contains both high and low numbers by using variables with a boolean value to track the presence of these numbers as we iterate through the array.
// If both conditions are met, the function returns true; otherwise, it returns false.
