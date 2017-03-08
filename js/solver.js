// recursive algorithm solver, that takes a gird, row and column
function solver(grid, row, col) {
    var cell = openlocation(grid, row, col);
    row = cell[0];
    col = cell[1];

    //The base case for the recursive call 
    if (row == -1) {
        return true;
    }
    //Iterate over
    for (var num = 1; num <= 9; num++) {
    	//If the number has no conflicts then assign it to the array
        if (checkConflicts(grid, row, col, num)){ 
            grid[row][col] = num;
            //Recursive call to keep working on the puzzle
            if (solver(grid, row, col)) {                
                return true;
            }
              
            grid[row][col] = 0;
        }
    }
    //start the backtrack
    return false;
}