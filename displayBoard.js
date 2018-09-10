function displayBoard (board) {
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board.length; y++) {
            if (board[x][y])
            document.getElementById("r" + x + "c" + y).style.background = "red";
            else
            document.getElementById("r" + x + "c" + y).style.background = "green";

        }  
    }
}

module.exports = displayBoard
