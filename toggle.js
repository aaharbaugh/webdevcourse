var button = document.querySelector("button");

button.addEventListener("click", toggler);

// function toggler(){
// 	if(document.body.style.background != "purple"){
// 		document.body.style.background = "purple";
// 	} else {
// 		document.body.style.background = "white";
// 	}
// }

function toggler(){
	document.body.classList.toggle("purple");
}