import Controller from './modules/Controller.mjs';

const main = new Controller();
const board = main.getBoard();
main.createRandomBoard();
main.getBoardDrawer().drawEmptyBoard();
console.log(board);
