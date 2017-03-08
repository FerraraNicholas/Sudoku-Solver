//Checks if the surrounding box follows the rules that it is 1-9
function isValidBox(grid, row, col, num) {
	//Get the surrounding box
	row = Math.floor(row / 3) * 3;
	col = Math.floor(col / 3) * 3;
	//Nested for loops to iterated over the box
    for (var r = 0; r < 3; r++)
        for (var c = 0; c < 3; c++)
            if (grid[row + r][col + c] == num){
            	//If the number already exist, not valid
                return false;
            }
    //Otherwise it is valid        
    return true;
}