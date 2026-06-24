function calculate(){
	let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let c = parseFloat(document.getElementById("num3").value);
    let d = parseFloat(document.getElementById("num4").value);
	let sum = a+b+c+d;
	let avg=sum/4;
	let grade;
	let result;
	
	if(avg>=80 && avg<=100){
	  grade = "A+";
	}
	else if(avg<80 && avg>=40){
	  grade = "B";
	}
	else{
	  grade = "C";
	}
	
	if(sum>=50){
	  result = "PASS";
	}
	else{
	  result = "FAIL";
	}
	
	document.getElementById("res").innerHTML =
	  "TOTAL :" + sum.toFixed(2) + '<br>' +
	  "AVERAGE :" + avg.toFixed(2) + '<br>' +
	  "GRADE : " + grade + '<br>' +
	  "RESULT :" + result;
	
}