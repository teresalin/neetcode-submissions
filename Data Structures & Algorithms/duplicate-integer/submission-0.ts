class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        if (nums.length === 0) {
            return false;
        }
        let map = new Set<number>();
        for (const num of nums) {
            if (map.has(num)) {
                return true;
            }
            map.add(num);
        }
        return false;
    }
}
