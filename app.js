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
