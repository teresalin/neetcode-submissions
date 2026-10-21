class Solution {

    isAlphanumeric(str: string): boolean {
        return /^[a-z0-9]+$/i.test(str);
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let start = 0;
        let end = s.length - 1;
        if (end === 0) {
            return true;
        }
        while (start < end) {
            while (!this.isAlphanumeric(s[start])) {
                start += 1;
            }
            while (!this.isAlphanumeric(s[end])) {
                end -= 1;
            }
            if (start > end) {
                return true;
            }
            if (s[start].toLowerCase() != s[end].toLowerCase()) {
                return false;
            }
            start += 1;
            end -= 1;
        }
        return true;
    }
}
