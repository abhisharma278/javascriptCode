/** @format */

// Generate a random color
const randomColor = () => {
	const hex = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += [Math.floor(Math.random() * 16)];
	}
	return color;
};
let intervalId;
const startChangingColor = function () {
    console.log("start");
	function changeBgColor() {
		document.body.style.backgroundColor = randomColor();
	}
    if (!intervalId ) {
        intervalId = setInterval(changeBgColor, 300);    
    }
};
const stopChangingColor = function () {
	console.log('stop');
	clearInterval(intervalId);
    setInterval= null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
