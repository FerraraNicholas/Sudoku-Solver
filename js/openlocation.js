function openlocation(grid, row, col) {
	//Variable declaration
    var done = false;
    var result = [-1, -1]; //Default result to let you know puzzle is solve
    //While the not done
    while (!done) {
        //If the last row, it is done
        if (row == 9) {
            done = true;
        }else{
        	//If the rown and col == 0 then assign the value to the result array
            if (grid[row][col] == 0){
                result[0] = row;
                result[1] = col;
                done = true;
            }else{
            	//If the column is less than eight increment the column
                if (col < 8){
                    col++;
                }
                else { 
                    //increment the row
                    row++;
                    col = 0;
                }
            }
        }
    }
    return result;
}