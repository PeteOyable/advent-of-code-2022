export {};
const fs = require('fs');
const eol = require('os').EOL;
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');
const sum = (previousValue: number, currentValue: number) => previousValue + currentValue;

// Part one
const rucksacks: string[] = input.split(eol).map((line: string) => line);
const getRucksackFirstHalf = (data: string) => {
  return data.slice(0, data.length / 2);
};

const getRucksackSecondHalf = (data: string) => {
  return data.slice(data.length / 2);
};

const getLetterPositionInAlphabet = (letter: string, upperCase = false): number => {
  const base = upperCase ? 27 : 1;
  const alphabet = upperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : 'abcdefghijklmnopqrstuvwxyz';
  const indexOfLetter = alphabet.split('').indexOf(letter);
  if (indexOfLetter === -1) {
    return getLetterPositionInAlphabet(letter, true);
  }
  return indexOfLetter + base;
};

const getRuckSackPriority = (line: string) => {
  let priority = 0;
  const firstHalf = getRucksackFirstHalf(line);
  const secondHalf = getRucksackSecondHalf(line);
  const letter = firstHalf.split('').find((letter: string) => secondHalf.includes(letter));
  if (letter) {
    priority = getLetterPositionInAlphabet(letter);
  }
  return priority;
};

const sumPriorities = rucksacks.map(getRuckSackPriority).reduce(sum, 0);

console.log('Part 1: ', sumPriorities);

// Part two
const rucksacksPartTwo: string[][] = input.split(eol).reduce((acc: string[], currentValue: string, index: number) => {
  if (index % 3 === 0) {
    return [...acc, [currentValue]];
  }
  return [...acc.slice(0, -1), [...acc.slice(-1)[0], currentValue]];
}, []);

const getRucksackPartTwoPriority = (lines: string[]) => {
  let priority = 0;

  if (lines.length < 3) return priority;

  const letter = lines[0].split('').find((letter: string) => lines[1].includes(letter) && lines[2].includes(letter));

  if (letter) {
    priority = getLetterPositionInAlphabet(letter);
  }

  return priority;
};

const sumPrioritiesPartTwo = rucksacksPartTwo.map(getRucksackPartTwoPriority).reduce(sum, 0);
console.log('Part 2: ', sumPrioritiesPartTwo);
