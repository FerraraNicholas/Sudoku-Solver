//checks if the column is follows the rules that a number is 1-9
function isValidCol(grid, col, num) {
	//Iterate over the row
    for (var row = 0; row < 9; row++)
    //If there is that number already in row
    if (grid[row][col] == num){
        //It is not a valid number
        return false;
    }
    //Otherwise it is valid
    return true;    
}