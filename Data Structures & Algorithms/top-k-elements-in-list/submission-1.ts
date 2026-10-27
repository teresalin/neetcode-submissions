class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freq = Array.from({ length: nums.length + 1 }, () => []);
        let l = 0;
        let count = {};

        for (const num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        for (const n in count) {
            freq[count[n]].push(parseInt(n));
        }

        let result = [];
        for (let i = freq.length - 1; i >= 0; i--) {
            if (freq[i].length !== 0) {
                result.push(...freq[i]);
                if (result.length === k) {
                    return result;
                }
            }
        }
    }
}
