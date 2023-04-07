let currentPlayer;

function handleClick(e) {
    const cell = e.target;
    let validMove = false; // Add a flag to check if the user made a valid move

    if (!cell.dataset.player) {
        currentPlayer = 'X'; // Switch to User
        cell.textContent = currentPlayer;
        cell.dataset.player = currentPlayer;

        if (checkWinner(currentPlayer)) {
            alert(`Player ${currentPlayer} wins!`);
            location.reload();
            return;
        }

        if (isBoardFull()) {
            alert("It's a draw!");
            location.reload();
            return;
        }

        validMove = true; // Set the flag to true if the user made a valid move
    }

    // Call makeAiMove() only if the user made a valid move
    if (validMove) {
        makeAiMove();
    }
}


cells.forEach(cell => cell.addEventListener('click', handleClick));