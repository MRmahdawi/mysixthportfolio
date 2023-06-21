var level1= document.getElementById("level1");
var level2= document.getElementById("level2");
var level3= document.getElementById("level3");
var level4= document.getElementById("level4");

var div1= document.getElementById("form1");
var div2= document.getElementById("form2");
var div3= document.getElementById("form3");
var div4= document.getElementById("form4");

var next1= document.getElementById("next1");
var back1= document.getElementById("back1");
var next2= document.getElementById("next2");
var back2= document.getElementById("back2");
var next3= document.getElementById("next3");
var back3= document.getElementById("back3");
var Submit= document.getElementById("Submit");

var meter1= document.getElementById("meter1");
var meter2= document.getElementById("meter2");
var meter3= document.getElementById("meter3");

var cercle1= document.getElementById("cercle1");
var cercle2= document.getElementById("cercle2");
var cercle3= document.getElementById("cercle3");
var cercle4= document.getElementById("cercle4");

var icon1= document.getElementById("icon1");
var icon2= document.getElementById("icon2");
var icon3= document.getElementById("icon3");
var icon4= document.getElementById("icon4");

var itemsname1= document.getElementById("items-name1");
var itemsname2= document.getElementById("items-name2");
var itemsname3= document.getElementById("items-name3");
var itemsname4= document.getElementById("items-name4");

next1.onclick = function(){
	div1.style.transition= "0.5s";
	div1.style.left= "-500px";
	div2.style.transition= "0.5s";
	div2.style.left= "0px";
	meter1.style.transition= "0.5s";
	meter1.style.background= "#ff007b";
	icon1.style.transition = "0.5s";
	icon1.style.visibility = "visible";
	number1.style.visibility = "hidden";
	cercle1.style.transition = "0.5s";
	cercle1.style.background = "#ff007b";
	icon1.style.transition = "0.5s";
	icon1.style.color = "#fff";
	cercle1.style.border= "3px solid #ff007b";
	itemsname1.style.color = "#ff007b";
}
back1.onclick = function(){
	div1.style.transition= "0.5s";
	div1.style.left= "0px";
	div2.style.transition= "0.5s";
	div2.style.left= "500px";
	meter1.style.transition= "0.5s";
	meter1.style.background= "#000";
	icon1.style.visibility = "hidden";
	number1.style.visibility = "visible";
	cercle1.style.transition = "0.5s";
	cercle1.style.background = "#fff";
	icon1.style.color = "#000";
	cercle1.style.border= "3px solid #000";
	itemsname1.style.color = "#000";
}
next2.onclick = function(){
	div2.style.transition= "0.5s";
	div2.style.left= "-500px";
	div3.style.transition= "0.5s";
	div3.style.left= "0px";
	meter2.style.transition= "0.5s";
	meter2.style.background= "#ff007b";
	icon2.style.transition = "0.5s";
	icon2.style.visibility = "visible";
	number2.style.visibility = "hidden";
	cercle2.style.transition = "0.5s";
	cercle2.style.background = "#ff007b";
	icon2.style.transition = "0.5s";
	icon2.style.color = "#fff";
	cercle2.style.border= "3px solid #ff007b";
	itemsname2.style.color = "#ff007b";
}
back2.onclick = function(){
	div2.style.transition= "0.5s";
	div2.style.left= "0px";
	div3.style.transition= "0.5s";
	div3.style.left= "500px";
	meter2.style.transition= "0.5s";
	meter2.style.background= "#000";
	icon2.style.visibility = "hidden";
	number2.style.visibility = "visible";
	cercle2.style.transition = "0.5s";
	cercle2.style.background = "#fff";
	icon2.style.color = "#000";
	cercle2.style.border= "3px solid #000";
	itemsname2.style.color = "#000";
}
next3.onclick = function(){
	div3.style.transition= "0.5s";
	div3.style.left= "-500px";
	div4.style.transition= "0.5s";
	div4.style.left= "0px";
	meter3.style.transition= "0.5s";
	meter3.style.background= "#ff007b";
	icon3.style.transition = "0.5s";
	icon3.style.visibility = "visible";
	number3.style.visibility = "hidden";
	cercle3.style.transition = "0.5s";
	cercle3.style.background = "#ff007b";
	icon3.style.transition = "0.5s";
	icon3.style.color = "#fff";
	cercle3.style.border= "3px solid #ff007b";
	itemsname3.style.color = "#ff007b";
}
back3.onclick = function(){
	div3.style.transition= "0.5s";
	div3.style.left= "0px";
	div4.style.transition= "0.5s";
	div4.style.left= "500px";
	meter3.style.transition= "0.5s";
	meter3.style.background= "#000";
	icon3.style.visibility = "hidden";
	number3.style.visibility = "visible";
	cercle3.style.transition = "0.5s";
	cercle3.style.background = "#fff";
	icon3.style.color = "#000";
	cercle3.style.border= "3px solid #000";
	itemsname3.style.color = "#000";
}