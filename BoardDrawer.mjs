import Board from './Board.mjs';

export default class BoardDrawer {
  constructor(board) {
    this.board = board;
    this.rows = this.board.getRows();
    this.columns = this.board.getColumns();
    this.boardArea = document.getElementById('game_board');
  }
}
