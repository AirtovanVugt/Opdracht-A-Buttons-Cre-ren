
var container = document.getElementById("container");
var knop1 = document.createElement("button");
var knop2 = document.createElement("button");
var knop3 = document.createElement("button");
var body = document.getElementsByTagName("body")[0];

container.appendChild(knop1);
knop1.style.backgroundColor = "green";
container.appendChild(knop2);
knop2.style.backgroundColor = "red";
container.appendChild(knop3);
knop3.style.backgroundColor = "blue";

knop1.innerText = "knop1";
knop2.innerText = "knop2";
knop3.innerText = "knop3";


knop1.addEventListener("click", function(){
	body.style.backgroundColor = "green";
})

knop2.addEventListener("click", function(){
	body.style.backgroundColor = "red";
})

knop3.addEventListener("click", function(){
	body.style.backgroundColor = "blue";
})