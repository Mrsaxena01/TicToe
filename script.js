document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const resetButton = document.getElementById('reset');

    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const index = cell.dataset.index;
            if (gameBoard[index] === '') {
                gameBoard[index] = currentPlayer;
                cell.textContent = currentPlayer;
                checkWinner();
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });

    resetButton.addEventListener('click', () => {
        resetGame();
    });

    function checkWinner() {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let combo of winningCombos) {
            const [a, b, c] = combo;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                alert(`${gameBoard[a]} wins!`);
                resetGame();
                return;
            }
        }

        if (!gameBoard.includes('')) {
            alert("It's a tie!");
            resetGame();
        }
    }

    function resetGame() {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        cells.forEach(cell => {
            cell.textContent = '';
        });
    }
});
