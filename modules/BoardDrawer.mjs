export default class BoardDrawer {
  static get BOARD_HEIGHT() {
    return 432;
  }

  constructor(board) {
    this.board = board;
    this.rows = this.board.getRows();
    this.columns = this.board.getColumns();
    this.boardArea = document.getElementById('game_board');
    this.context = this.boardArea.getContext('2d');
    this.context.imageSmoothinEnabled = false;
    this.boardArea.height = BoardDrawer.BOARD_HEIGHT;
    this.boardArea.width = BoardDrawer.BOARD_HEIGHT;
  }

  getRows() {
    return this.rows;
  }

  getBoardArea() {
    return this.boardArea;
  }

  getContext() {
    return this.context;
  }

  drawEmptyBoard() {
    if (this.getRows() === 8) {
      const img = new Image();
      img.src = './images/8.png';
      img.onload = () => this.context.drawImage(
        img,
        0,
        0,
        BoardDrawer.BOARD_HEIGHT,
        BoardDrawer.BOARD_HEIGHT,
      );
    } else if (this.getRows() === 9) {
      const img = new Image();
      img.src = './images/9.png';
      img.onload = () => this.context.drawImage(
        img,
        0,
        0,
        BoardDrawer.BOARD_HEIGHT,
        BoardDrawer.BOARD_HEIGHT,
      );
    } else {
      const img = new Image();
      img.src = './images/10.png';
      img.onload = () => this.context.drawImage(
        img,
        0,
        0,
        BoardDrawer.BOARD_HEIGHT,
        BoardDrawer.BOARD_HEIGHT,
      );
    }
  }
}
