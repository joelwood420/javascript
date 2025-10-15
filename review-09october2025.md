Question 1


function canWatchTv(isHoliday, isWeekday) {
 if (isHoliday || !isWeekday) {       // If it's a holiday OR it's not a weekday
    return true;   // This will return a true if conditions are met.
  }
  return false;    // If the conditions in the if statement are not met this will return false
} 

console.log(canWatchTv(false, true));
console.log(canWatchTv(true, false));

My approach for this was to first check if it's a holiday or not a weekday using the OR operator ||. If either condition is true, the function returns true, allowing TV watching. If neither condition is met, it returns false, indicating that TV watching is not allowed.


Qusetion 2

// Function that checks if two partners made the same decision
function doPartnersAgree(partner1Decision, partner2Decision) {
  // Check if partner1's decision is equal to partner2's decision
  if (partner1Decision === partner2Decision) {
    // Return true because both partners made the same decision
    return true;
  }
  // Return false because partners made different decisions
  return false;
}

my approach for this was to use the strict equality operator (===) to compare the decisions of both partners. If they are the same, the function returns true; otherwise, it returns false.

Question 3

// Function that determines if a business is open based on what day and month it is
function isOpen(weekday, month) {
  // Check if it's NOT monday AND it's NOT july, both conditions must be true
  if (weekday !== "monday" && month !== "july") {
    // Return true because the business is open
    return true;
  }
  // Return false because it's either Monday or July or both, so business is closed
  return false;
}

// Test case: Checking if open on Tuesday in July
console.log(isOpen("tuesday", "july"));

my approach for this was to use the not equal operator to first check if the day is not Monday and the month is not July. If both conditions are true, the function returns true, indicating that the business is open. If either condition is false, the function returns false, indicating that the business is closed.