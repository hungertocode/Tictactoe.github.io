export default class Game {

    constructor() {
        this.turn = 'X';

        this.board = new Array(9).fill("null");

    }
    nextturn() {
        if (this.turn == 'X')

            this.turn = 'O';

        else
            this.turn = 'X';


    }
    makemove(i) {

        if (this.winningcombination())
            return;

        const tile = document.querySelector(`.board-tile[data-value='${i}']`)
        console.log(tile);
        if (this.turn == 'O') {
            tile.classList.add('active');
            console.log('y');
        }
        this.board[i] = this.turn;
        this.nextturn();

    }

    winningcombination() {
        const combination = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const comb of combination) {
            let [a, b, c] = comb;

            if ((this.board[a] != 'null') && (this.board[a] == this.board[b] && this.board[a] == this.board[c]))
            {
                const tile1 = document.querySelector(`.board-tile[data-value='${a}']`);
            tile1.classList.add('tile-winner');
            const tile2 = document.querySelector(`.board-tile[data-value='${b}']`);
            tile2.classList.add('tile-winner');

            const tile3 = document.querySelector(`.board-tile[data-value='${c}']`);
            tile3.classList.add('tile-winner');

            return true;
            }
        }
        return false;
    }
}