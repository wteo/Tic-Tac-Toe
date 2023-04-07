const cells = document.querySelectorAll('.cell');

function checkWinner(player, customBoard) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    const boardToCheck = customBoard || cells;

    return winPatterns.some(pattern => pattern.every(index => boardToCheck[index].dataset.player === player));
}


function isBoardFull() {
    return [...cells].every(cell => cell.dataset.player);
    }