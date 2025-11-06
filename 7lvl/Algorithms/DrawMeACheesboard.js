function chessBoard(rows, columns) {
const chessboard = [];

  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < columns; c++) {
      // если сумма индексов чётная — O, если нечётная — X
      row.push((r + c) % 2 === 0 ? 'O' : 'X');
    }
    chessboard.push(row);
  }

  return chessboard;
}