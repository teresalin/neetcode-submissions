class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let result = new Map<string, string[]>();
        
        for (const str of strs) {
            let count: number[] = Array(26).fill(0);
            // Populate char count for the current string
            for (const char of str) {
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = count.join(',');
            const value = result.get(key);
            if (value) {
                value.push(str)
                result.set(key, value);
            }
            else {
                result.set(key, [str]);
            }
        }
    return Array.from(result.values());
    }
}
