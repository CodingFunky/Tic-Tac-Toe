const boardEle = document.querySelector('#board');
const boardSpot = document.querySelectorAll('.boardSpot');
const winnerEle = document.querySelector('#winner');
const resetBtn = document.querySelector('#reset');
const submitBtn = document.querySelector('#submit');
const playerName = document.querySelector('#playerName');

const player = (sign, name) => {
    return {sign, name};
};

let playerOne = player('X', 'X');
let playerTwo = player('O', 'X');
let whoseTurn = playerOne;

submitBtn.addEventListener('click', () => {
    playerOne.name = playerName.value;
})

const displayController = (() => {
    let update = function(spot) {
        if(!spot.textContent && whoseTurn === playerOne) {
            spot.textContent = "X";
            let spotIndex = spot.getAttribute('data-attritube');
            gameBoard.update(spotIndex);
            whoseTurn = playerTwo;
        }else if (!spot.textContent && whoseTurn === playerTwo) {
            spot.textContent = 'O';
            let spotIndex = spot.getAttribute('data-attritube');
            gameBoard.update(spotIndex);
            whoseTurn = playerOne;
        } else {
        }
    }
    let reset = function() {
        boardSpot.forEach((spot) => {
            spot.textContent = '';
        })
    }
    return {update, reset};
})();
const gameBoard = (() => {
    let board = ['', '', '', 
                 '', '', '',
                 '', '', ''];
    let update = function(spotIndex) {
        board[spotIndex] = whoseTurn;
        gameBoard.checkWinner(spotIndex);
    }
    let checkWinner = function(spotIndex) {
        const tieGame = (spot) => spot === '';
        if (board[0].sign === board[1].sign && board[0].sign === board[2].sign && board[1] != '') {
            winnerEle.textContent = board[0].name + ' Wins';
        }else if (board[0].sign === board[4].sign && board[0].sign === board[8].sign && board[4] != '') {
            winnerEle.textContent = board[0].name + ' Wins';
        }else if (board[0].sign === board[3].sign && board[0].sign === board[6].sign && board[3] != '') {
            winnerEle.textContent = board[0].name + ' Wins';
        }else if (board[1].sign === board[4].sign && board[1].sign === board[7].sign && board[4] != ''){
            winnerEle.textContent = board[1].name + ' Wins';
        }else if (board[2].sign === board[4].sign && board[2].sign === board[6].sign && board[4] != '' || board[2].sign === board[5].sign && board[2].sign === board[8].sign && board[5] != '') {
            winnerEle.textContent = board[2].name + ' Wins';
        }else if (board[3].sign === board[4].sign && board[3].sign === board[5].sign && board[4] != ''){
            winnerEle.textContent = board[3].name + ' Wins';
        }else if (board[6].sign === board[7].sign && board[6].sign === board[8].sign && board[7] != '') {
            winnerEle.textContent = board[6].name + ' Wins';
        }else if (board.findIndex(tieGame) < 0) {
            alert('Tie');
        }
        else {
            return 0;
        }
    }
    let reset = function() {
        board = ['', '', '', 
                 '', '', '',
                 '', '', ''];
        displayController.reset();
        whoseTurn = playerOne;
    }
    return {board, update, checkWinner, reset};
    
})();
boardSpot.forEach((spot) => {
    spot.addEventListener('click', () => {
        displayController.update(spot);
    })
})
resetBtn.addEventListener('click', () => {
    gameBoard.reset();
    winnerEle.textContent = 'Results';
})
// const gameLoop = (() => {

// })();
// boardEle.textContent = gameBoard;