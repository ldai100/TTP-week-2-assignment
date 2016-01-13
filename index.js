function p1(){
	var x, y;
	x=11,y=12;
	console.log(x+y);
}

function p2(){
	var acura=["TL","RSX"];
	var benz=["E-class","C-class"]
	var car=[acura,benz];
	console.log(car[0][0], car[1][1]);
}

function p3(){
	var num=prompt("pleasse enter a number",null);
	if(num<10) alert("variable is less than 10!");
		else console.log("The number was greater than 10 and it was "+ num);
}


function p4(){
	var stored="random";
	var sen=prompt("pleasse enter a string",null);
	if(sen!==stored) alert("not the same string!");
		else console.log("same string entered");
}
var someName;
function p5(someName){
	someName=prompt("Enter a name:");
	console.log("Name entered "+someName);
}

function p6(){
	console.log("random output");
}
