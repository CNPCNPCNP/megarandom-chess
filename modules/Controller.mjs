import Board from './Board.mjs';

export default class Controller {
  static get KING_VALUE() {
    return 10;
  }

  constructor() {
    this.rows = Math.floor(Math.random() * 3 + 8);
    this.columns = this.rows;
    this.board = new Board(this.rows, this.columns);
  }

  // Getter function for board
  getBoard() {
    return this.board;
  }

  // Print out board pieces
  printBoard() {
    console.log(this.getBoard().getPieces());
  }

  // Create random pawn piece
  static createRandomPawn() {
    const pawnType = Math.random() * 4;
    if (pawnType <= 3) {
      return 1;
    }
    if (pawnType <= 3.33) {
      return 2;
    }
    if (pawnType <= 3.66) {
      return 3;
    }
    return 4;
  }

  static createRandomQueen() {
    const queenType = Math.random() * 4;
    if (queenType <= 3) {
      return 20;
    }
    if (queenType <= 3.25) {
      return 21;
    }
    if (queenType <= 3.5) {
      return 22;
    }
    if (queenType <= 3.75) {
      return 23;
    }
    return 24;
  }

  static createRandomKnight() {
    const knightType = Math.random() * 4;
    if (knightType <= 3) {
      return 30;
    }
    if (knightType <= 3.2) {
      return 31;
    }
    if (knightType <= 3.4) {
      return 32;
    }
    if (knightType <= 3.6) {
      return 33;
    }
    if (knightType <= 3.8) {
      return 34;
    }
    return 35;
  }

  static createRandomBishop() {
    const bishopType = Math.random() * 4;
    if (bishopType <= 3) {
      return 40;
    }
    if (bishopType <= 3.5) {
      return 31;
    }
    return 42;
  }

  static createRandomRook() {
    const rookType = Math.random() * 4;
    if (rookType <= 3) {
      return 50;
    }
    if (rookType <= 3.33) {
      return 24;
    }
    if (rookType <= 3.66) {
      return 52;
    }
    return 21;
  }

  static range(end) {
    return Array(end).fill().map((_, idx) => 0 + idx);
  }

  createRandomBoard() {
    const placed = Controller.range(this.rows);
    const rook1 = Controller.createRandomRook();
    const rook2 = Controller.createRandomRook();
    const bishop1 = Controller.createRandomBishop();
    const bishop2 = Controller.createRandomBishop();
    const knight1 = Controller.createRandomKnight();
    const knight2 = Controller.createRandomKnight();
    const queen1 = Controller.createRandomQueen();

    const rook1Position = Math.floor(Math.random() * (this.columns - 2));
    placed.splice(rook1Position, 1);
    const rook2Position = Math.floor(Math.random() * (this.columns - rook1Position - 2)
                        + rook1Position + 2);
    placed.splice(placed.indexOf(rook2Position), 1);

    this.board.setPiece(this.rows - 1, rook1Position, rook1);
    this.board.setPiece(0, rook1Position, -rook1);
    this.board.setPiece(this.rows - 1, rook2Position, rook2);
    this.board.setPiece(0, rook2Position, -rook2);

    const kingPosition = Math.floor(Math.random() * (rook2Position - rook1Position - 1)
                       + rook1Position + 1);
    placed.splice(placed.indexOf(kingPosition), 1);
    this.board.setPiece(this.rows - 1, kingPosition, 10);
    this.board.setPiece(0, kingPosition, -10);

    const bishop1Position = placed[Math.floor(Math.random() * (this.columns - 3))];
    this.board.setPiece(this.rows - 1, bishop1Position, bishop1);
    this.board.setPiece(0, bishop1Position, -bishop1);
    placed.splice(placed.indexOf(bishop1Position), 1);

    let oppositeBishop;
    if (bishop1Position % 2 === 1) {
      oppositeBishop = placed.filter((i) => !(i % 2));
    } else {
      oppositeBishop = placed.filter((i) => i % 2);
    }
    const bishop2Position = oppositeBishop[Math.floor(Math.random() * oppositeBishop.length)];
    this.board.setPiece(this.rows - 1, bishop2Position, bishop2);
    this.board.setPiece(0, bishop2Position, -bishop2);
    placed.splice(placed.indexOf(bishop2Position), 1);

    const knight1Position = placed[Math.floor(Math.random() * placed.length)];
    this.board.setPiece(this.rows - 1, knight1Position, knight1);
    this.board.setPiece(0, knight1Position, -knight1);
    placed.splice(placed.indexOf(knight1Position), 1);

    const knight2Position = placed[Math.floor(Math.random() * placed.length)];
    this.board.setPiece(this.rows - 1, knight2Position, knight2);
    this.board.setPiece(0, knight2Position, -knight2);
    placed.splice(placed.indexOf(knight2Position), 1);

    const queen1Position = placed[Math.floor(Math.random() * placed.length)];
    this.board.setPiece(this.rows - 1, queen1Position, queen1);
    this.board.setPiece(0, queen1Position, -queen1);
    placed.splice(placed.indexOf(queen1Position), 1);

    let newPieceDecider = Math.random();
    if (placed.length === 2) {
      let newPiece2;
      if (newPieceDecider < 0.3) {
        newPiece2 = Controller.createRandomRook();
      } else if (newPieceDecider < 0.6) {
        newPiece2 = Controller.createRandomKnight();
      } else if (newPieceDecider < 0.9) {
        newPiece2 = Controller.createRandomQueen();
      } else {
        newPiece2 = Controller.KING_VALUE;
      }
      const newPiecePosition2 = placed[Math.floor(Math.random() * 2)];
      this.board.setPiece(this.rows - 1, newPiecePosition2, newPiece2);
      this.board.setPiece(0, newPiecePosition2, -newPiece2);
      placed.splice(placed.indexOf(newPiecePosition2), 1);
    }

    if (placed.length === 1) {
      newPieceDecider = Math.random();
      let newPiece1;
      if (newPieceDecider < 0.5) {
        newPiece1 = Controller.createRandomKnight();
      } else {
        newPiece1 = Controller.createRandomRook();
      }
      const newPiecePosition1 = placed[0];
      this.board.setPiece(this.rows - 1, newPiecePosition1, newPiece1);
      this.board.setPiece(0, newPiecePosition1, -newPiece1);
    }
  }
}
