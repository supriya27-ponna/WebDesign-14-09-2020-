// var a = "78sai";
// var b = "34ram";
// document.write(parseInt(a)+parseInt(b))
// console.log("hello");

// creating objects

// var details={
// 	name:"K.swami",
// 	email:"swami.k@apssdc.in",
// 	experience:"5 years in apssdc",
// 	courses:["webdesign using reactjs","python","data analysis"]
// }

// for loop for object

// for (var i = 0; i < details.courses.length; i++) {
// 	document.writeln(details.courses[i]+"<br>")
// }
// document.write(details.name,"<br>");

// for-in loop 

// var a = "Apssdc React";
// for(var i in a){
// 	document.writeln(a[i]+"<br>");
// }


// for (var i in details){
// 	document.write(details[i]+"<br>")
// }

// for of loop we use can only strings,arrays not the objects

// for (var i of details.courses){
// 	document.writeln(i);
// }
// var s = "123456"

// for (var i of s){
// 	document.write(i);
// }

// user defined functions
function add(){
	var details={
	name:"K.swami",
	email:"swami.k@apssdc.in",
	experience:"5 years in apssdc",
	courses:["webdesign using reactjs","python","data analysis"]
}
for (var i in details){
	document.write(details[i]+"<br>")
}
}
add();