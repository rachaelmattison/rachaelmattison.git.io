function printWord(word) {
	console.log(word);
}

function changeHeading(color) {
	document.getElementById('heading').style.backgroundColor=color;
}

function changeSubHeading(fontColor) {
	document.getElementById('subheading').style.color=fontColor;
}


function changeBackgroundColor(color) {
	document.getElementById('background').style.backgroundColor=color;
}

function changeWords(word) {
	document.getElementById('changingwords').innerHTML=word
	document.getElementById('changingwords').style.backgroundColor='lightgreen';
}

function changedivColor(color) {
	document.getElementById('warmcolors').style.backgroundColor=color;
}

// function changeBackgroundColor (color) {
// 	console.log(color);
// 	document.getElementById('body').style.backgroundColor
// }

// function changeHeading() {
// 	// changes the color of the header 
// 	document.getElementById('heading').style.backgroundColor="lightblue"
// 	// changes the text of the header 
// 	document.getElementById('heading').innerHTML = "i clicked the button"
// }

// function changeBackground(color) {
// 	document.getElementById('changecolor');
// 	// document.getElementById('changecolor1').style.backgroundColor="magenta"
// 	// document.getElementById('changecolor2').style.backgroundColor="brown"
// }

function changeHeading2 () {
	document.getElementById('changeheading2').innerHTML = "I am not Rachael."
	document.getElementById('changeheading2').style.backgroundColor="blue"

}



// function printWord1 () {
// 	console.log('ay carumba');
// 	console.log('hello');
// // }

// function printWord2 () {
// 	console.log('hiiiii');
// }

// function printWord1() {
// 	console.log('word');
// }

// function hello(name) {
// 	console.log('hello', name)
// }