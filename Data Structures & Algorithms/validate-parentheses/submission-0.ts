class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length === 1) {
            return false;
        }

        let stack: string[] = [];
        for (const char of s) {
            if (char === '(' || char === '[' || char === '{') {
                stack.push(char);
            }
            else {
                const left = stack.pop();
                if ((left === '(' && char === ')') || left === '{' && char === '}' || left === '[' && char === ']') {
                    continue;
                }
                else {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}
