"use strict";
function remove(inputString) {
    const seen = new Set();
    let result = "";
    for (const char of inputString) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }
    return result;
}
const inputValue1 = "hello";
const inputValue2 = "Xuân Nhất";
const output1 = remove(inputValue1);
const output2 = remove(inputValue2);
console.log(output1);
console.log(output2);
