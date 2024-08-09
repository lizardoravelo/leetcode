/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var getSubarrayBeauty = function(nums, k, x) {
    let result = [];
    let negCount = Array(101).fill(0); // Frequency array for negatives [-100, -1]

    // Fill the initial window
    for (let i = 0; i < k; i++) {
        if (nums[i] < 0) {
            negCount[-nums[i]]++; // Store frequency for negative numbers
        }
    }

    // Helper function to find the x-th smallest negative
    const findXthNegative = () => {
        let count = 0;
        for (let i = 100; i >= 1; i--) { // Iterate from -1 to -100
            count += negCount[i];
            if (count >= x) return -i;
        }
        return 0; // If fewer than x negatives, return 0
    };

    result.push(findXthNegative());

    // Slide the window
    for (let i = k; i < nums.length; i++) {
        // Add the new element in the window
        if (nums[i] < 0) {
            negCount[-nums[i]]++;
        }

        // Remove the old element out of the window
        if (nums[i - k] < 0) {
            negCount[-nums[i - k]]--;
        }

        // Add the x-th smallest negative of the current window
        result.push(findXthNegative());
    }

    return result;
};