/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
      while (stones.length > 1) {

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let num of stones) {
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num > secondLargest) {
        secondLargest = num;
      }
    }

    // Remove largest
    stones.splice(stones.indexOf(largest), 1);

    // Remove second largest
    stones.splice(stones.indexOf(secondLargest), 1);

    if (largest !== secondLargest) {
      stones.push(largest - secondLargest);
    }
  }

  return stones.length ? stones[0] : 0;
};