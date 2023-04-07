function makeAiMove() {

    setTimeout(() => {
        const bestMove = findBestMove();
        const aiCell = cells[bestMove];

        currentPlayer = 'O' // Switch to AI
        aiCell.textContent = currentPlayer;
        aiCell.dataset.player = currentPlayer;

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
    }, 300);
}


function minimax(board, depth, isMaximizingPlayer) {
    const winner = checkWinner(isMaximizingPlayer ? 'O' : 'X', board.map((player, index) => ({ dataset: { player } })));

    if (winner) {
        return winner === 'O' ? 10 - depth : depth - 10;
    }

    if (isBoardFull()) {
        return 0;
    }

    let bestValue = isMaximizingPlayer ? -Infinity : Infinity;

    for (let i = 0; i < cells.length; i++) {
        if (!board[i]) {
            board[i] = isMaximizingPlayer ? 'O' : 'X';
            const value = minimax(board, depth + 1, !isMaximizingPlayer);
            board[i] = ''; // Undo the move
            bestValue = isMaximizingPlayer
                ? Math.max(bestValue, value)
                : Math.min(bestValue, value);
        }
    }

    return bestValue;
}

function findBestMove() {
    let bestValue = -Infinity;
    let bestMove = -1;

    for (let i = 0; i < cells.length; i++) {
        if (!cells[i].dataset.player) {
            cells[i].dataset.player = 'O'; // Make the move
            cells[i].textContent = 'O'; // Update the textContent as well
            const moveValue = minimax([...cells].map(cell => cell.dataset.player), 0, false);
            cells[i].dataset.player = ''; // Undo the move
            cells[i].textContent = ''; // Undo the textContent as well

            if (moveValue > bestValue) {
                bestValue = moveValue;
                bestMove = i;
            }
        }
    }

    return bestMove;
}
