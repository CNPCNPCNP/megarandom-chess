import Board from './Board.mjs';
import BoardDrawer from './BoardDrawer.mjs';

class Controller {
  constructor() {
    this.rows = Math.floor(Math.random() * 3 + 8);
    this.columns = this.rows;
    this.board = new Board(this.rows, this.columns);
  }
}
