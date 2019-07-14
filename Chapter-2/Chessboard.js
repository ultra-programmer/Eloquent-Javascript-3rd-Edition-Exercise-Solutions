// A program that outputs a string containing a chessboard of a given size
let size = 8;
let board = '';
for (let i = 0; i < size; i++) {
 if (i % 2 === 0) board += `${" #".repeat(size / 2)}\n`;
 else board += `${"# ".repeat(size / 2)}\n`;
}
console.log(board);
