//prints out the result of the solution
function printOutput(grid) {
	//Variable declaration
    var result = "";
    //Nested for-loops to iterate over the array and hold two indexs
    for (var i = 0; i < 9; i++){
        for (var j = 0; j < 9; j++){
        	//store in result in string
            result = result + grid[i][j];
        }
        //then print with a new line attached to the end of strinf
        result = result + "\n";
    }
    //Print out to the document
   document.getElementById("demo").innerHTML = result;
}