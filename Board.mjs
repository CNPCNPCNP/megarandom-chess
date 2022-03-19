export default class Board {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.pieces = Array(this.rows).fill().map(() => Array(this.columns).fill(0));
  }

  // Getter for number of rows on board
  getRows() {
    return this.rows;
  }

  // Getter for number of columns on board
  getColumns() {
    return this.columns;
  }

  // Getter for pieces on the board
  getPieces() {
    return this.pieces;
  }

  // Setter for pieces on the board
  setPiece(row, column, pieceValue) {
    this.pieces[row][column] = pieceValue;
  }
}
