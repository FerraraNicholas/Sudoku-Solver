//Read file in
document.getElementById("openFile").addEventListener('change', function(){
	var fr = new FileReader();
	fr.onload = function(evt){
		var contents = evt.target.result;
		var re = "";
		//Replace all the X's with zeros
		for(var i = 0; i < contents.length; i++){
			if(contents.charAt(i) === 'X'){
				re = re + '0';
			}else{
				re = re + contents.charAt(i);
			}
		}

//Initalize a 2D array
var grid = [
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0]      
    ];

    //Parse the contents of the string into 2D array
    var res = "";
    for(var i = 0; i < 9; i++){
    	grid[0][i] = re.substring(i,i+1);
    	grid[1][i] = re.substring(i+11,i+12);
    	grid[2][i] = re.substring(i+22,i+23);
    	grid[3][i] = re.substring(i+33,i+34);
    	grid[4][i] = re.substring(i+44,i+45);
    	grid[5][i] = re.substring(i+55,i+56);
    	grid[6][i] = re.substring(i+66,i+67);
    	grid[7][i] = re.substring(i+77,i+78);
    	grid[8][i] = re.substring(i+88,i+89);
   }
        //Call the solver and print the results
		solver(grid, 0, 1);
		printOutput(grid);
	}
	fr.readAsText(this.files[0]);
})

