const boardEle = document.getElementById('board');
const boardSpot = document.querySelector('.boardSpot');
const displayController = (() => {

})();
const gameBoard = (() => {
    let counter = 0;
    let board = ['O', 'X', 'O', 
                 'X', 'O', 'X',
                 'X', 'O', 'X'];
    boardSpot.forEach(spot => {
        let spotChoice = document.createElement('p')
        spotChoice.classList.add('spotChoice');
        spotChoice.setAttribute('data-attritube', counter)
        spotChoice.textContent = spot;
        boardSpot.appendChild(spotChoice);
        counter++
    });

})();
// const gameLoop = (() => {

// })();
// boardEle.textContent = gameBoard;
console.log(gameBoard)