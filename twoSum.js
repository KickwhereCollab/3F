/**
* Given an array of integers, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

You may assume that each input would have exactly one solution.
*/

var twoSum = function(nums, target) {
  var resultArr = [];
    for(var i = 0; i < nums.length; i++) {
      for(var j = i+1; j < nums.length; j ++)   {
        if(nums[i] + nums[j] === target) {
          return resultArr = [i, j];
        }
      }      
    }
};
