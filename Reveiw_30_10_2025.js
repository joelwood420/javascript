 function lastBigNumber(arr) { // Declare function lastBigNumber with parameter arr
    let lastBiggerThan10 = 0;  // Declare a varible called lastBiggerThan10 and assign it a vale of 0
    for (let i = arr.length - 1; i >= 0; i--) { // Loop through the array from the end to the beginning
        if (arr[i] > 10) { // Check if the current element is greater than 10
            lastBiggerThan10 = arr[i]; // If it is, assign its value to lastBiggerThan10
            break; // Break the for loop once once the condition is met
        }
    }
    return lastBiggerThan10; // Return lastBiggerThan10
}

console.log(lastBigNumber([1, 5, 30, 31, 4, 4])); // Output: 31
console.log(lastBigNumber([1, 5, 30, 1, 42, 4])); // Output: 42
console.log(lastBigNumber([1, 5, 30, 31, 4, 11])); // Output: 11
console.log(lastBigNumber([1, 5, 30, 31, 14, 4])); // Output: 14
console.log(lastBigNumber([1, 5, 30, 31, 4, 4])); //  Output: 31



// My approach to this was to first Declare a function named LastBigNumber, and gave it one paramater arr. I then went on to Declare a varible and assign it a value of 0.
// I then created a for loop that would loop through the array from the end to the beginning. Inside the loop,
//  I created an if statement that would check if the current element is greater than 10. 
// If it is, I assign its value to lastBiggerThan10 and break out of the loop. Finally, I return lastBiggerThan10.
