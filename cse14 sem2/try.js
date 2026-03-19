/* 
     JS TO JSON CODE
const student ={
    name: "keerti",
    age: 25,
};
let jsonscript = JSON.stringify(student);
console.log(jsonscript);



   FOR..IN LOOP CODE --->
let student ={
    name: "keerti",
    age: 20,
    course: "BTECH",
    branch:" CSE",
};
for(let key in student){
    console.log(key + ":" + student[key]);
}
    FOR...OF LOOP CODE
let marks = [10,20,30,40];
for(let value of marks){
    console.log(value);
}

    ERROR HANDLING
try{
    let x = y + 10;
}catch (error){
    console.log("Error Occurred");
}
try{
    let y = 2;
    let x = y + 10;
    console.log(x);
}catch (error){
    console.log("Error Occurred");
}
      LOCAL STORAGE
localStorage.getItem("username","keerti","age",20,"course","BTECH");
let num = localStorage.setItem("username");
console.log(num);
*/


