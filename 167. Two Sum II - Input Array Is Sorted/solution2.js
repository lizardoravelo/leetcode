/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
//Not the best implementation for Sorted Array.
var twoSum = function(numbers, target) {
    const mapper = new Map();


    for(let i = 0; i < numbers.length; i++){
        const diff = target - numbers[i];
        if(mapper.has(diff)){
            return [mapper.get(diff) + 1, i + 1];
        }

        mapper.set(numbers[i], i);
    }

    return [];
};