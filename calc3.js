 function  getHistory() {
 return document.getElementById('history-value').innerText;
 }
 function printHistory(num){
 	document.getElementById('history-value').innerText = num;
 }


 function getOutput() {
 	return document.getElementById('output-value').innerText;
 }
  function printOutput(num) {
 	
 	 if (num == "") {
 	  document.getElementById('output-value').innerText = num;
 
     } 
 	 else {

 	 	document.getElementById('output-value').innerText = getFormattedNumber(num);

 	 }
 }
 
   function getFormattedNumber(num){  //check later
   	if(num == "-"){
   		return "";
   	}
   	var n = Number(num);
   	var value = n.toLocaleString("en");
    return value;
   }
  
  

   function reverseNumberFormat(num){
   	return Number(num.replace(/,/g,""));
   }
   

   var operator = document.getElementsByClassName("operator");
   //we use for loop to acess the operators in the calculator
   for(var i=0; i<operator.length;i++){
	   //then we added a click event listener to all the operators
	   operator[i].addEventListener("click", function(){
		  
		if(this.id == "clear"){
			printHistory("");
			printOutput("");	
		}
		 
		  //backspace
		  if(this.id=="backspace"){
			  var output = reverseNumberFormat(getOutput()).toString();
			  if(output){
				  output=output.substr(0, output.length-1);
				  printOutput(output);
			  }
		  }
		  else{ //other operators
			  var output = getOutput();
			  var history = getHistory();
			  if( output !=""){
				  output=reverseNumberFormat(output);
				  history += output;

				  //equal sign
				  if(this.id=="equals"){
					  var result = eval(history);
					  printOutput(result);
					  printHistory('');
					
				  }
				  else{
					  history += this.id;
					  printHistory(history);
					  printOutput('');
				  }
			  }
		  }
	   });
   }
  
   


   var number = document.getElementsByClassName("number");
   //we use for loop to acess the operators in the calculator
   for(var i=0; i<number.length;i++){
	   //then we added a click event listener to all the operators
	   number[i].addEventListener("click", function(){
		  
		var output = reverseNumberFormat(getOutput());
		if (output !== NaN){
			output += this.id; 
			printOutput(output);
		}

	   });
   }
  
 