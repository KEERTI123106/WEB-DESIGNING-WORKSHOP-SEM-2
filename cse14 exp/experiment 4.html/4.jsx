function calcResult(){
	let n = parseFloat(document.getElementById("subjects").value);
	let total = 0;
	let marks;
	for(let i=1;i<=n;i++){
	   marks = parseFloat(prompt("Enter marks of subject" , i));
	   total +=marks;
	}
	let average=total/n;
	let grade;
	let result;
	
	if(average>=85){
	  grade = "A+";
	}
	else if(average>=60 && average<40){
	  grade = "B";
	}
	else{
	  grade = "C";
	}
	
	if(marks>=50){
	  result = "PASS";
	}
	else{
	  result = "FAIL";
	}
	
	document.getElementById("resultS").innerHTML =
	  "TOTAL :" + total + '<br>' +
	  "AVERAGE :" + average.toFixed(2) + '<br>' +
	  "GRADE : " + grade + '<br>' +
	  "RESULT :" + result;
	
}