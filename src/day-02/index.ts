export {};
const fs = require('fs');
const eol = require('os').EOL;
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');
const firstMoves: Record<string, number> = {
  'A X': 1 + 3,
  'A Y': 2 + 6,
  'A Z': 3 + 0,
  'B X': 1 + 0,
  'B Y': 2 + 3,
  'B Z': 3 + 6,
  'C X': 1 + 6,
  'C Y': 2 + 0,
  'C Z': 3 + 3,
};

const secondMoves: Record<string, number> = {
  'A X': 3 + 0,
  'A Y': 1 + 3,
  'A Z': 2 + 6,
  'B X': 1 + 0,
  'B Y': 2 + 3,
  'B Z': 3 + 6,
  'C X': 2 + 0,
  'C Y': 3 + 3,
  'C Z': 1 + 6,
};

const getEarningPoints = (moves: Record<string, number>) =>
  data
    .map((line: string) => moves[line])
    .filter((point: number) => point)
    .reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0);

const data = input.split(eol).map((line: string) => line);

console.log('First part :', getEarningPoints(firstMoves));
console.log('Second part :', getEarningPoints(secondMoves));
