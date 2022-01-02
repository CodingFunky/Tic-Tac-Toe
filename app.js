const body = document.querySelector('body');
const boardEle = document.querySelector('#board');
const boardSpot = document.querySelectorAll('.boardSpot');
const winnerEle = document.querySelector('#winner');
const resetBtn = document.querySelector('#reset');
const submitBtn = document.querySelector('#submit');
const playerName = document.querySelector('#playerName');
const overlay = document.querySelector('.overlay');

const player = (sign, name) => {
    return {sign, name};
};

let playerOne = player('X', 'X');
let playerTwo = player('O', 'O');
let whoseTurn = playerOne;

submitBtn.addEventListener('click', () => {
    playerOne.name = playerName.value;
})

const displayController = ((e) => {
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
        console.log(board);
        if (board[0] === board[1] && board[0] === board[2] && board[1] != '') {
            gameBoard.endGame();
            winnerEle.textContent = board[0].name + ' Wins';
        }else if (board[0] === board[4] && board[0] === board[8] && board[4] != '') {
            winnerEle.textContent = board[0].name + ' Wins';
            gameBoard.endGame();
        }else if (board[0] === board[3] && board[0] === board[6] && board[3] != '') {
            winnerEle.textContent = board[0].name + ' Wins';
            gameBoard.endGame();
        }else if (board[1] === board[4] && board[1] === board[7] && board[4] != ''){
            winnerEle.textContent = board[1].name + ' Wins';
            gameBoard.endGame();
        }else if (board[2] === board[4] && board[2] === board[6] && board[4] != '' || board[2] === board[5] && board[2] === board[8] && board[5] != '') {
            winnerEle.textContent = board[2].name + ' Wins';
            gameBoard.endGame();
        }else if (board[3] === board[4] && board[3] === board[5] && board[4] != ''){
            winnerEle.textContent = board[3].name + ' Wins';
            gameBoard.endGame();
        }else if (board[6] === board[7] && board[6] === board[8] && board[7] != '') {
            winnerEle.textContent = board[6].name + ' Wins';
            gameBoard.endGame();
        }else if (board.findIndex(tieGame) < 0) {
            alert('Tie');
            gameBoard.endGame();
        }
        else {
            return 0;
        }
    }
    let endGame = function() {
        // overlay.classList.add('active');
        let text = document.createElement('div');
        text.classList.add('winnerText')
        text.textContent = whoseTurn.name + ' Wins!';
        overlay.appendChild(text);
        overlay.onclick = function closeOverlay() {
            overlay.classList.remove('active');
            gameBoard.reset();
            text.textContent = '';
          }
    }
    let reset = function() {
        board = ['', '', '', 
                 '', '', '',
                 '', '', ''];
        displayController.reset();
        whoseTurn = playerOne;
        winnerEle.textContent = 'Results';
    }
    return {board, update, checkWinner, reset, endGame};
    
})();
boardSpot.forEach((spot) => {
    // if (winnerEle.textContent != 'Results') return;
    spot.addEventListener('click', () => {
        if (winnerEle.textContent != 'Results') return;
        displayController.update(spot);
    })
})
// boardSpot.forEach((spot) => {
//     spot.addEventListener('click', displayController.update(spot));
// })
resetBtn.addEventListener('click', () => {
    gameBoard.reset();
})
// const gameLoop = (() => {

// })();
// boardEle.textContent = gameBoard;