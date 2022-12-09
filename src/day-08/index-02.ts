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

const findClosestBlockingTreeInRow = (height: number, index: number, array: number[]) => {
  let leftIndex = index;
  let rightIndex = index;
  // Go left
  while (leftIndex > 0 && array[leftIndex - 1] < height) {
    leftIndex--;
  }
  // Go right
  while (rightIndex < array.length - 1 && array[rightIndex + 1] < height) {
    rightIndex++;
  }

  const left = index - (leftIndex === 0 ? leftIndex : leftIndex - 1);
  const right = (rightIndex === array.length - 1 ? rightIndex : rightIndex + 1) - index;

  return left * right;
};

const findClosestBlockingTreeInColumn = (height: number, index: number, indexTree: number, array: number[][]) => {
  let topIndex = index;
  let bottomIndex = index;
  // Go top
  while (topIndex > 0 && array[topIndex - 1][indexTree] < height) {
    topIndex--;
  }
  // Go bottom
  while (bottomIndex < array.length - 1 && array[bottomIndex + 1][indexTree] < height) {
    bottomIndex++;
  }

  const top = index - (topIndex === 0 ? topIndex : topIndex - 1);
  const bottom = (bottomIndex === array.length - 1 ? bottomIndex : bottomIndex + 1) - index;

  return top * bottom;
};

const processTreesLine = (treesLine: number[], indexTreeLine: number, trees: number[][]) => {
  return treesLine.map((height: number, indexHeight: number, arrayHeight: number[]) => {
    const indexX = findClosestBlockingTreeInRow(height, indexHeight, arrayHeight);
    const indexY = findClosestBlockingTreeInColumn(height, indexTreeLine, indexHeight, trees);

    return indexX * indexY;
  });
};

const processTrees = (trees: number[][]) => {
  return trees.map(processTreesLine);
};

const tewe = processTrees(trees).map((line: number[]) => Math.max(...line));
console.log(Math.max(...tewe));
