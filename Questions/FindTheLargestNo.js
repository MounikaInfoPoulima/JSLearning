var largestNumber = function(nums) {
    // Convert numbers to strings for easier comparison
    nums = nums.map(String);
    
    // Custom sorting function
    nums.sort((a, b) => (b + a) - (a + b));
    
    // If the largest number is "0", return "0" (handle the case for numbers like [0, 0])
    if (nums[0] === '0') {
        return '0';
    }
    
    // Join the sorted array and return the result
    return nums.join('');
};