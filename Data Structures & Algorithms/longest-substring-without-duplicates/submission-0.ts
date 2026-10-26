class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const len = s.length;
        if (len === 0 || len === 1) {
            return len;
        }

        let unique = new Set<string>();

        let l = 0;
        let r = 1;
        let maxLen = 1;
        unique.add(s[l]);
        
        while (r < len) {
            if (!unique.has(s[r])) {
                unique.add(s[r]);
            }
            else {
                while (unique.has(s[r])) {
                    unique.delete(s[l]);
                    l++;
                }
                unique.add(s[r]);
            }
            r++;
            maxLen = Math.max(maxLen, unique.size);
        }
        return maxLen;
    }
}
