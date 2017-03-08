//Checks to see if the row of the grid follows the rules that number is 1-9
function isValidRow(grid, row, num) {
	//Oterate over the column
    for (var col = 0; col < 9; col++)
    	//if the number in the cell equal the num
        if (grid[row][col] == num){
        	//then the number already exist and row is not valid
            return false;
        }
    //Otherwise it is valid    
    return true;
}