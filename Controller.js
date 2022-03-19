import { Board } from './Board';
import { BoardDrawer } from './BoardDrawer';

class Controller {
  constructor() {
    this.rows = Math.floor(Math.random() * 3 + 8);
    this.columns = this.rows;
    this.board = new Board(this.rows, this.columns);
  }
}
