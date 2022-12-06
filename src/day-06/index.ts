export {};
const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');
// const input = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw';

const hasDuplicateLetters = (str: string) => {
    const letters = str.split('');
    const unique = new Set(letters);
    return unique.size !== letters.length;
}

const moveCursor = (cursor: number) => {
    return {
        start: cursor,
        // end: cursor + 4
        end: cursor + 14
    }
}

function main() {
    let cursor = moveCursor(0);
    let sequence = input.slice(cursor.start, cursor.end);

    while(hasDuplicateLetters(sequence)) {
        cursor = moveCursor(cursor.start+1);
        sequence = input.slice(cursor.start, cursor.end);
    }

    console.log(sequence);
    console.log(cursor);

}(main())