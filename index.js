function maxSubarraySum(arr, k) {
    let maxSum = 0;
    let windowSum = 0;

    for (let i = 0; i < k; i++) {
        windowSum += arr[i]; // Initial window
    }

    maxSum = windowSum;

    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k]; // Slide the window
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)); // Output: 9
// 🧒 Explanation like a kid:
// First, take the first 3 numbers and add them.
// Then, remove the leftmost number and add the next one.
// Keep doing this — always 3 numbers — and track the biggest sum.

// Pattern name: Maximum Subarray Sum of Size K
// Pattern description: Given an array and a number k, find the maximum sum of any contiguous subarray of size k.
// Pattern difficulty: Medium
// Pattern tags: Array, Sliding Window
// Pattern code: javascript
// Pattern codeSnippet: maxSubarraySum.toString();
// Pattern example:
//     input: "[2, 1, 5, 1, 3, 2], 3",
//     output: "9"


function lengthOfLongestSubstring(s) {
    let start = 0;
    let maxLength = 0;
    const seen = new Set();

    for (let end = 0; end < s.length; end++) {
        // If character is already in the set, shrink the window from the left
        while (seen.has(s[end])) {
            seen.delete(s[start]);
            start++; // Shrink window
        }
        seen.add(s[end]);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
// 🧒 Explanation like a kid:
// Imagine you have a string of letters and you want to find the longest part where no letter repeats.
// You look at each letter one by one and keep track of the letters you've seen.
// If you see a letter again, you start from the next letter and keep going.

// Pattern name: Longest Substring Without Repeating Characters
// Pattern description: Given a string, find the length of the longest substring without repeating characters.
// Pattern difficulty: Medium
// Pattern tags: String, Sliding Window
// Pattern code: javascript
// Pattern codeSnippet: lengthOfLongestSubstring.toString();
// Pattern example:
//     input: "\"abcabcbb\"",
//     output: "3"  
