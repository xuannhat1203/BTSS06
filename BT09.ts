function removee(inputString: string): string {
    const seen: Set<string> = new Set();
    let result: string = "";
    for (const char of inputString) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }
    
    return result;
}
const inputValue3: string = "hello";
const inputValue4: string = "Xuân Nhất";
const output3: string = removee(inputValue3);
const output4: string = removee(inputValue4);
console.log(output3);
console.log(output4);
