const fs = require('fs');
const eol = require('os').EOL;
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');

// Part 1
const isWithinRangePart1 = (firstRange: number[], secondRange: number[]) => {
    return firstRange[0] >= secondRange[0] && firstRange[1] <= secondRange[1]
        || firstRange[0] <= secondRange[0] && firstRange[1] >= secondRange[1];
}

const processLinePart1 = (line: string) => {
    const [firstElf, secondElf] = line.split(',');
    const firstElfRange = firstElf.split('-').map(Number);
    const secondElfRange = secondElf.split('-').map(Number); ;

    if(isWithinRangePart1(firstElfRange, secondElfRange)) {
        return 1;
    }

    return 0;
}

const solutionPart1 = input.split(eol).map(processLinePart1).reduce((acc: number, curr: number) => acc + curr, 0);
console.log('Part 1: ', solutionPart1)

const isWithinRangePart2 = (firstRange: number[], secondRange: number[]) => {
    return firstRange[1] >= secondRange[0] && firstRange[1] <= secondRange[1]
        || secondRange[1] >= firstRange[0] && secondRange[1] <= firstRange[1]
}

const processLinePart2 = (line: string) => {
    const [firstElf, secondElf] = line.split(',');
    const firstElfRange = firstElf.split('-').map(Number);
    const secondElfRange = secondElf.split('-').map(Number); ;

    if(isWithinRangePart2(firstElfRange, secondElfRange)) {
        return 1;
    }

    return 0;
}
const solutionPart2 = input.split(eol).map(processLinePart2).reduce((acc: number, curr: number) => acc + curr, 0);
console.log('Part 2: ', solutionPart2)