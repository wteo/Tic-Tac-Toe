function handleClick(e) {

    const cell = e.target;
    let validMove = false; // Add a flag to check if the user made a valid move

    if (!cell.dataset.player) {
        currentPlayer = 'X'; // Switch to User
        cell.textContent = currentPlayer;
        cell.dataset.player = currentPlayer;

        getResults();

        validMove = true; // Set the flag to true if the user made a valid move
    }

    // Call makeAiMove() only if the user made a valid move
    if (validMove && !gameEnded) {
        makeAiMove();
    }
}


cells.forEach(cell => cell.addEventListener('click', handleClick));