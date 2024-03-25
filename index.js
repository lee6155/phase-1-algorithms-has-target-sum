
function hasTargetSum(array, target) {
  let newArray = []
  for (i = 0; i < array.length - 1; i++) {
    for (j = i; j < array.length - 1; j++) {
      if((array[i] + array[j+1]) === target) {
        newArray.push(true)
      } else {
        newArray.push(false)
      }
    }
  }
  if (newArray.indexOf(true) === -1) {
    return false
  } else {
    return true
  }
}

hasTargetSum([3,8,12,4,11,7],10)

/* 
  Write the Big O time complexity of your function here

  Step: create new array

  1st for loop: n steps (depends on the length of the array)

  2nd for loop: n^2

    array length/steps
    1/0
    2/1
    3/3
    4/6
    5/10
    6/15

  Step: if statement

  O(n^2 + n + 2) or O(n^2 + n) or quadratic time
*/

/* 
  Add your pseudocode here

  Start by taking the 1st number in the array, and adding it to the 2nd; then take the 1st + 3rd; then take 1st + 4th, etc.

  Then take the 2nd number in the array, and add it to the 3rd; take the 2nd + 4th, etc.

  For everything above, if the sum of each iteration strictly equals the target number, add true to an array; if not, add false
  
  If our newArray contains a true, then there are two numbers in the array that sum to the target number; if not, then these two numbers aren't in the array
*/

/*
  Add written explanation of your solution here

  To execute my pseudocode, I used a for loop nested in another for loop

  The outer for loop will start from the first number in the array and the inner loop will add the 1st to the 2nd, the 1st to the 3rd, etc. The outer loop will then move to the second number in the array and the inner loop will add it to the 3rd number, then add it to the 4th number, etc.

  In each of these iterations, if the sum of two numbers is strictly equal to the target number, it will return true to newArray; if not, it will return false

  By using indexOf on the newArray, I can figure out if there is a true in the array. If there isn't, the if statement will return false, and if there is the if statement will return true
*/

if (require.main === module) {

  console.log("Expecting: true");
  console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("Expecting: true");
  console.log(hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("Expecting: false");
  console.log(hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log(hasTargetSum([1, 2, 8, 7, 12, 14, 3, 6, 8, 12, 17, 20, 21, 30, 40, 50, 60, 1, 2, 3, 4, 5, 7, 10, 11, 12, 49, 48, 35, 37], 50));
}


module.exports = hasTargetSum;
