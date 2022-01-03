const body = document.querySelector('body');
const boardEle = document.querySelector('#board');
const boardSpot = document.querySelectorAll('.boardSpot');
const winnerEle = document.querySelector('#winner');
const resetBtn = document.querySelector('#reset');
const submitBtn = document.querySelector('#submit');
const playerName = document.querySelector('#playerName');
const overlay = document.querySelector('.overlay');

const Player = (sign, name) => {
    return {sign, name};
};
const computer = (sign, name) => {
    const prototype = Player(sign, name);

    const makeMove = () => {
        let board = gameBoard.board;
        if (winnerEle.textContent != 'Results') return;
        // if (board[0] === board[1] && board[2] === '' && board[0] === computerPlayer) {
        //     if (winnerEle.textContent != 'Results') return; //do this instead of allSpotsTaken?
        //     console.log('I can Win!');
        //     // let dataAttr = board.indexOf(board[2]);
        //     let spot = document.querySelector('[data-attritube="2"]');
        //     displayController.update(spot);
        // }else if (board[0] === board[4] && board[8] === '' && board[0] === computerPlayer) {
        //     if (winnerEle.textContent != 'Results') return; //do this instead of allSpotsTaken?
        //     console.log('I can Win!');
        //     let spot = document.querySelector('[data-attritube="8"]');
        //     displayController.update(spot);
        // }else if (board[0] === board[3] && board[6] === '' && board[0] === computerPlayer) {
        //     if (winnerEle.textContent != 'Results') return; //do this instead of allSpotsTaken?
        //     console.log('I can Win!');
        //     let spot = document.querySelector('[data-attritube="6"]');
        //     displayController.update(spot);
        // }else if (board[1] === board[4] && board[7] === '' && board[1] === computerPlayer){
        //     if (winnerEle.textContent != 'Results') return; //do this instead of allSpotsTaken?
        //     console.log('I can Win!');
        //     let spot = document.querySelector('[data-attritube="7"]');
        //     displayController.update(spot);
        // }else if (board[2] === board[4] && board[6] === '' && board[2] === computerPlayer) {
        //     if (winnerEle.textContent != 'Results') return; //do this instead of allSpotsTaken?
        //     console.log('I can Win!');
        //     let spot = document.querySelector('[data-attritube="6"]');
        //     displayController.update(spot);
        // }else if (board[2] === board[5] && board[8] === '' && board[2] === computerPlayer) {
        //     if (winnerEle.textContent != 'Results') return; //do this instead of allSpotsTaken?
        //     console.log('I can Win!');
        //     let spot = document.querySelector('[data-attritube="8"]');
        //     displayController.update(spot);
        // }else if (board[3] === board[4] && board[5] === '' && board[3] === computerPlayer){
        //     if (winnerEle.textContent != 'Results') return; //do this instead of allSpotsTaken?
        //     console.log('I can Win!');
        //     let spot = document.querySelector('[data-attritube="5"]');
        //     displayController.update(spot);
        // }else if (board[6] === board[7] && board[8] === '' && board[6] === computerPlayer) {
        //     if (winnerEle.textContent != 'Results') return; //do this instead of allSpotsTaken?
        //     console.log('I can Win!');
        //     let spot = document.querySelector('[data-attritube="8"]');
        //     displayController.update(spot);
        // }
        if (canIWin() === true) {
            
        }
        else {
            if (winnerEle.textContent != 'Results') return;
            let randomMove = Math.floor(Math.random() * board.length);
            console.log('random ' + randomMove);
            let dataAttr = '[data-attritube='+'"'+randomMove+'"'+']'
            let spot = document.querySelector(dataAttr);
                console.log("spot " + spot.textContent);
                while (!!spot.textContent && !allSpotsTaken()) {
                   randomMove = Math.floor(Math.random() * board.length)
                   console.log('new random ' + randomMove);
                   dataAttr = '[data-attritube='+'"'+randomMove+'"'+']';
                   spot = document.querySelector(dataAttr);
                }
            console.log('displayController Update')
            displayController.update(spot);
        }
    }
    let allSpotsTaken = function() {
        board = gameBoard.board;
        const allTaken = (spot) => spot === '';
        if (board.findIndex(allTaken) < 0) {
            console.log('true');
            return true;
        }else {
            console.log('false');
            return false;
        }
    }
    let canIWin = function() {
        if (board[0] === board[1] && board[2] === '' && board[0] === computerPlayer) {
            if (winnerEle.textContent != 'Results') return; //do this instead of allSpotsTaken?
            console.log('I can Win!');
            // let dataAttr = board.indexOf(board[2]);
            let spot = document.querySelector('[data-attritube="2"]');
            displayController.update(spot);
            return true;
        }else if (board[0] === board[4] && board[8] === '' && board[0] === computerPlayer) {
            if (winnerEle.textContent != 'Results') return; //do this instead of allSpotsTaken?
            console.log('I can Win!');
            let spot = document.querySelector('[data-attritube="8"]');
            displayController.update(spot);
            return true;
        }else if (board[0] === board[3] && board[6] === '' && board[0] === computerPlayer) {
            if (winnerEle.textContent != 'Results') return; //do this instead of allSpotsTaken?
            console.log('I can Win!');
            let spot = document.querySelector('[data-attritube="6"]');
            displayController.update(spot);
            return true;
        }else if (board[1] === board[4] && board[7] === '' && board[1] === computerPlayer){
            if (winnerEle.textContent != 'Results') return; //do this instead of allSpotsTaken?
            console.log('I can Win!');
            let spot = document.querySelector('[data-attritube="7"]');
            displayController.update(spot);
            return true;
        }else if (board[2] === board[4] && board[6] === '' && board[2] === computerPlayer) {
            if (winnerEle.textContent != 'Results') return; //do this instead of allSpotsTaken?
            console.log('I can Win!');
            let spot = document.querySelector('[data-attritube="6"]');
            displayController.update(spot);
            return true;
        }else if (board[2] === board[5] && board[8] === '' && board[2] === computerPlayer) {
            if (winnerEle.textContent != 'Results') return; //do this instead of allSpotsTaken?
            console.log('I can Win!');
            let spot = document.querySelector('[data-attritube="8"]');
            displayController.update(spot);
            return true;
        }else if (board[3] === board[4] && board[5] === '' && board[3] === computerPlayer){
            if (winnerEle.textContent != 'Results') return; //do this instead of allSpotsTaken?
            console.log('I can Win!');
            let spot = document.querySelector('[data-attritube="5"]');
            displayController.update(spot);
            return true;
        }else if (board[6] === board[7] && board[8] === '' && board[6] === computerPlayer) {
            if (winnerEle.textContent != 'Results') return; //do this instead of allSpotsTaken?
            console.log('I can Win!');
            let spot = document.querySelector('[data-attritube="8"]');
            displayController.update(spot);
            return true;
        }else {
            return false;
        }
    }
    return Object.assign({}, prototype, {makeMove, allSpotsTaken, canIWin});
};

let playerOne = Player('X', 'X');
let computerPlayer = computer('O', 'COME-PEW-TORE');
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
            whoseTurn = computerPlayer;
            computerPlayer.makeMove();
        }else if (!spot.textContent && whoseTurn === computerPlayer) {
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
            gameBoard.winner = 0;
        })
    }
    return {update, reset};
})();
const gameBoard = (() => {
    let board = ['', '', '', 
                 '', '', '',
                 '', '', ''];
    let winner = null;

    let update = function(spotIndex) {
        gameBoard.board[spotIndex] = whoseTurn;
        gameBoard.checkWinner(spotIndex);
    }
    let checkWinner = function(spotIndex) {
        const tieGame = (spot) => spot === ''; //if no spots are empty tie game possible
        // console.log('tie game ' + tieGame)
        console.log(gameBoard.board);
        if (gameBoard.board[0] === gameBoard.board[1] && gameBoard.board[0] === gameBoard.board[2] && gameBoard.board[1] != '') {
            winner = gameBoard.board[0].name;
            gameBoard.endGame(winner);
            winnerEle.textContent = gameBoard.board[0].name + ' Wins';
        }else if (gameBoard.board[0] === gameBoard.board[4] && gameBoard.board[0] === gameBoard.board[8] && gameBoard.board[4] != '') {
            winner = gameBoard.board[0].name;
            winnerEle.textContent = gameBoard.board[0].name + ' Wins';
            gameBoard.endGame(winner);
        }else if (gameBoard.board[0] === gameBoard.board[3] && gameBoard.board[0] === gameBoard.board[6] && gameBoard.board[3] != '') {
            winner = gameBoard.board[0].name;
            winnerEle.textContent = gameBoard.board[0].name + ' Wins';
            gameBoard.endGame(winner);
        }else if (gameBoard.board[1] === gameBoard.board[4] && gameBoard.board[1] === gameBoard.board[7] && gameBoard.board[4] != ''){
            winner = gameBoard.board[1].name;
            winnerEle.textContent = gameBoard.board[1].name + ' Wins';
            gameBoard.endGame(winner);
        }else if (gameBoard.board[2] === gameBoard.board[4] && gameBoard.board[2] === gameBoard.board[6] && gameBoard.board[4] != '' || gameBoard.board[2] === gameBoard.board[5] && gameBoard.board[2] === gameBoard.board[8] && gameBoard.board[5] != '') {
            winner = gameBoard.board[2].name;
            winnerEle.textContent = gameBoard.board[2].name + ' Wins';
            gameBoard.endGame(winner);
        }else if (gameBoard.board[3] === gameBoard.board[4] && gameBoard.board[3] === gameBoard.board[5] && gameBoard.board[4] != ''){
            winner = gameBoard.board[3].name;
            winnerEle.textContent = gameBoard.board[3].name + ' Wins';
            gameBoard.endGame(winner);
        }else if (gameBoard.board[6] === gameBoard.board[7] && gameBoard.board[6] === gameBoard.board[8] && gameBoard.board[7] != '') {
            winner = gameBoard.board[6].name;
            winnerEle.textContent = gameBoard.board[6].name + ' Wins';
            gameBoard.endGame(winner);
        }else if (gameBoard.board.findIndex(tieGame) < 0) {
            console.log('tie?');
            winner = 'tie';
            gameBoard.endGame(winner);
        }
        else {
            return 0;
        }
    }
    let endGame = function(winner) {
        overlay.classList.add('active');
        let text = document.createElement('div');
        text.classList.add('winnerText')
        if (winner === 'tie') {
            text.textContent = 'TIE';
        } else {
            text.textContent = whoseTurn.name + ' Wins!';
        }
        overlay.appendChild(text);
        overlay.onclick = function closeOverlay() {
            gameBoard.reset();
            overlay.classList.remove('active');
            // gameBoard.reset();
            text.textContent = '';
          }
    }
    let reset = function() {
        gameBoard.board = ['', '', '', 
                 '', '', '',
                 '', '', ''];
        displayController.reset();
        whoseTurn = playerOne;
        winnerEle.textContent = 'Results';
    }
    return {board, winner, update, checkWinner, reset, endGame};
    
})();
boardSpot.forEach((spot) => {
    // if (winnerEle.textContent != 'Results') return;
    spot.addEventListener('click', () => {
        if (winnerEle.textContent != 'Results') return; //takes off event listener when a winner as been decided
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