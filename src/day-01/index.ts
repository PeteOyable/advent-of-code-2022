const fs = require('fs');
const eol = require('os').EOL;
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');
const data: number[][] = input.split(eol + eol).map((group: string) => group.split(eol).map(Number));
const sum = (arr: number[]) => arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

const calories = data.map((group: number[]) => sum(group)).sort((a, b) => b - a);
const maxCalory = Math.max(...calories);
const topThreeCalories = sum(calories.slice(0, 3));

console.log('Max calory is : ', maxCalory);
console.log('Sum of top three calories is : ', topThreeCalories);
