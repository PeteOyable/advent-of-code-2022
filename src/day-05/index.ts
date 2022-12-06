export {};
const fs = require('fs');
const path = require('path');
const moves = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8').split(require('os').EOL).map((move: string) => move.match(/\d+/g));
const crates = [
    ['N', 'R', 'G', 'P'],
    ['J', 'T', 'B', 'L', 'F', 'G', 'D', 'C'],
    ['M', 'S', 'V'],
    ['L', 'S', 'R', 'C', 'Z', 'P'],
    ['P', 'S', 'L', 'V', 'C', 'W', 'D', 'Q'],
    ['C', 'T', 'N', 'W', 'D', 'M', 'S'],
    ['H', 'D', 'G', 'W', 'P'],
    ['Z', 'L', 'P', 'H', 'S', 'C', 'M', 'V'],
    ['R', 'P', 'F', 'L', 'W', 'G', 'Z'],
];

const processLine = (line: string[]) => {
    const [quantity, from, to] = line.map(Number);
    const fromCrate = crates[from - 1];
    const toCrate = crates[to - 1];
    // const toMove = fromCrate.splice(fromCrate.length - quantity, quantity).reverse(); // Part 1
    const toMove = fromCrate.splice(fromCrate.length - quantity, quantity);
    console.log(`Moving ${toMove.join(', ')} from crate ${from} to crate ${to}`);
    crates[to - 1] = [...toCrate, ...toMove];
};

for (const line of moves) {
    processLine(line);
}

const solution = crates.map((crate) => crate.slice(-1)).join('');
console.log(solution);
