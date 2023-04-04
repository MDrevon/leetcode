/** Valid Anagram
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let word1 = s.split("");
  let word2 = t.split("");
  let word1Obj = {};
  let word2Obj = {};

  if (word1.length !== word2.length) {
    return false;
  }

  for (let x = 0; x < word1.length; x++) {
    if (word1Obj[word1[x]]) {
      word1Obj[word1[x]]++;
      //console.log(word1Obj);
    } else {
      word1Obj[word1[x]] = 1;
    }
    if (word2Obj[word2[x]]) {
      word2Obj[word2[x]]++;
      //console.log(word1Obj);
    } else {
      word2Obj[word2[x]] = 1;
    }
  }

  for (let x = 0; x < word1.length; x++) {
    if (word1Obj[word1[x]] !== word2Obj[word1[x]]) {
      console.log(word1Obj[word1[x]] + " does not match " + word2Obj[word1[x]]);
      return false;
    }
  }
  return true;
};

/** Contains Duplicate
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let set = new Set(nums);

  if (set.size < nums.length) {
    return true;
  } else {
    return false;
  }
};

/** Two Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
};

//console.log(twoSum([2, 7, 11, 15], 9));

/** Is Palindrome Number
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let numArray = String(x).split("");
  let reversedArray = numArray.reverse();

  if (x === Number(reversedArray.join(""))) {
    return true;
  }
  return false;
};

//console.log(isPalindrome(1212));
