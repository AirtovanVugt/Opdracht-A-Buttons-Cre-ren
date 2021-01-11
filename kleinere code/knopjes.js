
var container = document.getElementById("container");

var kleur = ["green", "red", "blue"]

for(var i=0; i<3; i++){
	var knopjes = document.createElement("button");
	knopjes.innerText = "knop " + (i+1);
	knopjes.style.backgroundColor = kleur[i];
	knopjes.addEventListener("click", function(){
		achtergrond(this.style.backgroundColor);
	})
	container.appendChild(knopjes);
}

function achtergrond(kleurtje){
	document.body.style.backgroundColor = kleurtje;
}