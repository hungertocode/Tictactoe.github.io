export default class GameView {

    constructor() {


    }
    updateactive(game) {
        let playerX = document.querySelector(".player1");
        let playerO = document.querySelector(".player2");

        if (game.turn == 'X') {
            playerX.classList.add('active');
            // console.log("X")
            playerO.classList.remove('active');

        } else {
            playerX.classList.remove('active');
            // console.log("Y")

            playerO.classList.add('active');
        }

    }

    updateBoard(game) {
        this.updateactive(game);
        for (let i = 0; i < game.board.length; i++) {
            const tile = document.querySelector(`.board-tile[data-value='${i}']`);

            if (game.board[i] != 'null') {
                tile.textContent = game.board[i];
            }
        }
        game.winningcombination();


    }
    restartBoard(game) {
        let playerX = document.querySelector(".player1")
        playerX.classList.add('active');
        let playerO = document.querySelector(".player2")
        playerO.classList.remove('active');

        for (let i = 0; i < game.board.length; i++) {
            const tile = document.querySelector(`.board-tile[data-value='${i}']`);
            tile.classList.remove('active');
            tile.classList.remove('tile-winner');

            tile.textContent = "";
        }
    }

}