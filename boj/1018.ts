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

// 바뀌어야하는 판 체크
board.map((row, i) => (row.map((col, j) => {
    const isBlack = ((!(i % 2) && (j % 2)) || ((i % 2) && !(j % 2)))
    if ((isBlack && col != 'B') || (!isBlack && col == 'B')) {
        board[i][j] = 'P'
        patchedBoard[i][j] = 1
        patchedQuantity++
    }
}).join(' ')))

// 열 => 8개씩 합 구하기
const columnSummariesed = (patchedBoard.map((row,) =>
    [...Array(row.length - 7)].map((_, offset) => row.slice(offset, offset + 8).reduce((a, b) => a + b))
))

// 행연산을 위한 배열 뒤집기
const pivotReversed = [...Array(columnSummariesed[0].length)].map((_, col) =>
    [...Array(columnSummariesed.length)].map((_, row) => columnSummariesed[row][col]))

// 행 => 8개씩 합 구하기
const rowSummariesed = (pivotReversed.map((row,) =>
    [...Array(row.length - 7)].map((_, offset) => row.slice(offset, offset + 8).reduce((a, b) => a + b))
)).reduce((a, b) => [...a, ...b])

console.log(Math.min(...rowSummariesed))