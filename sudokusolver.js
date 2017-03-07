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
    	//Check to see if correct number
        if (checkConflicts(grid, row, col, num) ) { 

            grid[row][col] = num;
            if (solver(grid, row, col)) {                
                return true;
            }
            // mark cell as empty (with 0)    
            grid[row][col] = 0;
        }
    }
    //start the backtrack
    return false;
}


function openlocation(grid, row, col) {
	//Variable declaration
    var done = false;
    var result = [-1, -1]; //Default result to let you know puzzle is solve


    while (!done) {
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
                else { //
                    row++;
                    col = 0;
                }
            }
        }
    }

    return result;
}

//prints out the result of the solution
function printOutput(grid) {
	//Variable declaration
    var result = "";
    //Nested for-loops to iterate over the array
    for (var i = 0; i < 9; i++){
        for (var j = 0; j < 9; j++){
        	//store in result
            result = result + grid[i][j];
        }
        //then print with a new line attached to the end
        result = result + "\n";
    }
   //document.write(result);
   document.getElementById("demo").innerHTML = result;
}

//checks if the column is follows the rules that a number is 1-9
function isValidCol(grid, col, num) {
    for (var row = 0; row < 9; row++)
    if (grid[row][col] == num){
        return false;
    }
    return true;    
}

//Checks to see if the row of the grid follows the rules that number is 1-9
function isValidRow(grid, row, num) {
	//Oterate over the column
    for (var col = 0; col < 9; col++)
    	//if the number in the cell equal the num
        if (grid[row][col] == num){
        	//then the number already exist and row is not valid
            return false;
        }

    return true;
}

//Checks if the surrounding box follows the rules that it is 1-9
function isValidBox(grid, row, col, num) {
	row = Math.floor(row / 3) * 3;
	col = Math.floor(col / 3) * 3;
	//Nested for loops to iterated over the box
    for (var r = 0; r < 3; r++)
        for (var c = 0; c < 3; c++)
            if (grid[row + r][col + c] == num){
                return false;
            }
    return true;
}

//Checks that there is no conflicts between row, col and the surrounding box
function checkConflicts(grid, row, col, num) {
    return isValidRow(grid, row, num) && isValidCol(grid, col, num) && isValidBox(grid, row, col, num);
}

