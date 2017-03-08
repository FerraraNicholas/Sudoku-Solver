//Checks that there is no conflicts between row, col and the surrounding box
function checkConflicts(grid, row, col, num) {
	//Return true if the the number does not conflict with any other in the row, col or box
    return isValidRow(grid, row, num) && isValidCol(grid, col, num) && isValidBox(grid, row, col, num);
}