const board = `
BBBBBBBBWBWBW
BBBBBBBBBWBWB
BBBBBBBBWBWBW
BBBBBBBBBWBWB
BBBBBBBBWBWBW
BBBBBBBBBWBWB
BBBBBBBBWBWBW
BBBBBBBBBWBWB
WWWWWWWWWWBWB
WWWWWWWWWWBWB`.substr(1).split('\n').map(e => e.split(''))

const patchedBoard = board.map(e => [...e].map(e => 0))

let patchedQuantity = 0;

board.map((row, i) => (row.map((col, j) => {
    const isBlack = ((!(i % 2) && (j % 2)) || ((i % 2) && !(j % 2)))
    if ((isBlack && col != 'B') || (!isBlack && col == 'B')) {
        board[i][j] = 'P'
        patchedBoard[i][j] = 1
        patchedQuantity++
    }
}).join(' ')))

const columnSummariesed = (patchedBoard.map((row,) =>
    [...Array(row.length - 7)].map((_, offset) => row.slice(offset, offset + 8).reduce((a, b) => a + b))
))
const pivotReversed = [...Array(columnSummariesed[0].length)].map((_, col) =>
    [...Array(columnSummariesed.length)].map((_, row) => columnSummariesed[row][col]))

const rowSummariesed = (pivotReversed.map((row,) =>
    [...Array(row.length - 7)].map((_, offset) => row.slice(offset, offset + 8).reduce((a, b) => a + b))
)).reduce((a, b) => [...a, ...b])

console.log(Math.min(...rowSummariesed))