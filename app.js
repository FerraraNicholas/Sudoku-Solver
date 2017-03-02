document.getElementById("openFile").addEventListener('change', function(){
	var fr = new FileReader();
	fr.onload = function(evt){
		//document.getElementById("Filecontents").textContent = this.result;
		//call back
		var contents = evt.target.result;
		console.log("Content:", contents);
	}
	fr.readAsText(this.files[0]);
	//console.log(contents);
})