function longestIncreasingSubsequence(arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }

  const n = arr.length;
  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}
const inputArray = [10, 22, 9, 33, 21, 50, 41, 60, 80];
const result = longestIncreasingSubsequence(inputArray);
console.log("The length of the longest increasing subsequence is:", result);
