
let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/starforce-success.jpg') {
	  myImage.setAttribute ('src','images/starforce-fail.jpg');
	} else {
	  myImage.setAttribute ('src','images/starforce-success.jpg');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('이름 써.');
    if(!myName || myName === null) {
	setUserName();
    } else {
	localStorage.setItem('name', myName);
	myHeading.innerHTML = myName + '자바 그냥 일단 해봐';
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + '자바 그냥 일단 해봐';
}

myButton.onclick = function() {
    setUserName();
}

