import Game from './game.js'
import GameView from "./gameview.js"

let game = new Game();
let gam = new GameView();


let tiles = document.querySelectorAll('.board-tile');
// console.log(tiles);

function onclicked(i) {
    if (game.board[i] == 'null') {
        game.makemove(i)
        gam.updateBoard(game)
    }
};
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onclicked(tile.dataset.value)
    })
});

let restartGame = document.querySelector(".button");
console.log(restartGame)
restartGame.addEventListener("click", () => {
    game = new Game();
    gam.restartBoard(game);



});