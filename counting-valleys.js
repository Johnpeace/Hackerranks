/**
 * Question: https://www.hackerrank.com/challenges/counting-valleys
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

 function countingValleys(steps, path) {
  // Write your code here
  let level = 0;
  let valleys = 0;
  
  for (let step of path) {
      if (step === 'U') {
          ++level;
          
          if (level === 0) ++valleys
      } else {
          --level
      }
  }
  
  return valleys
}
