// var target = 6
// var data = [3,3]
// -----
var target = -8;
var data = [-1, -2, -3, -4, -5];
// -----
// var data = [2, 7, 11, 15]
// target = 9

var twoSum = function(nums, target) {
  for (const [index, item] of nums.entries()) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] + item === target && i !== index) {
        return [index, i];
      }
    }
  }
}; // END OF FUNCTION

// Return the index Positions
twoSum(data, target); /*?*/

// Runtime: 152 ms, faster than 29.06% of JavaScript online submissions for Two Sum.
