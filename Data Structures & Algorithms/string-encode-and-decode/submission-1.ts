class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result = "";
        for (const str of strs) {
            const len = str.length;
            result += len;
            result += `#${str}`;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        console.log(`decoding ${str}`);
        let result: string[] = [];
        let l = 0;
        let len = "";
        while (l < str.length) {
            const c = str[l];
            if (c >= "0" && c <= "9") {
                len += c;
                if (str[l + 1] === "#") {
                    const numLen = Number(len);
                    console.log(`numLen ${numLen}`);
                    len = '';
                    console.log(`slicing ${l + 2} ${l + 2 + numLen}`);
                    result.push(str.slice(l + 2, l + 2 + numLen));
                    l = l + 2 + numLen;
                }
                else {
                    l++;
                }
            } else {
                l++;
            }
        }
        return result;
    }
}
