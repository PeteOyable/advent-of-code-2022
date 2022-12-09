export {};
const fs = require('fs');
const path = require('path');
const eol = require('os').EOL;

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');
const trees = input
  .split(eol)
  .map((line: string) => line.split(''))
  .filter((line: string[]) => line.length > 0)
  .map((line: string[]) => line.map(Number));

const proccessTreesLine = (treesLine: number[], indexTreeLine: number, trees: number[][]) => {
  return treesLine.map((height: number, indexHeight: number, arrayHeight: number[]) => {
    // Nothing to the right
    if (indexHeight === arrayHeight.length - 1) return 1;
    // Nothing to the left
    if (indexHeight === 0) return 1;
    // Nothing above
    if (indexTreeLine === 0) return 1;
    // Nothing below
    if (indexTreeLine === trees.length - 1) return 1;

    // Check if the current tree is the tallest
    const isVisibleRow =
      arrayHeight.slice(0, indexHeight).every((value: number) => height > value) ||
      arrayHeight.slice(indexHeight + 1).every((value: number) => height > value);
    const isVisibleColumn =
      trees.slice(0, indexTreeLine).every((value: number[]) => height > value[indexHeight]) ||
      trees.slice(indexTreeLine + 1).every((value: number[]) => height > value[indexHeight]);
    const isVisible = isVisibleRow || isVisibleColumn;

    if (isVisible) {
      return 1;
    }

    return 0;
  });
};

const processTrees = (trees: number[][]) => {
  return trees.map(proccessTreesLine);
};

const treesVisibleNumber = processTrees(trees).reduce((acc: number, curr: number[]) => {
  return acc + curr.reduce((acc: number, curr: number) => acc + curr, 0);
}, 0);

console.log(treesVisibleNumber);
