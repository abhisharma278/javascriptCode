/** @format */

// const form = document.querySelector('form');
// // console.log(form);
// // This usecase will give you empty
// // const height = parseInt(document.querySelector('#height').value)

// form.addEventListener('submit', (e) => {
// 	e.preventDefault();
// 	const height = parseInt(document.querySelector('#height').value);
// 	const weight = parseInt(document.querySelector('#weight').value);
// 	const results = document.querySelector('#results');
// 	const weightGuide = document.querySelector('#weight-guide');
// 	if (height === '' || height < 0 || isNaN(height)) {
// 		results.innerHTML = `Please give me Valid Heights ${height}`;
// 	} else if (weight === '' || weight < 0 || isNaN(weight)) {
// 		results.innerHTML = `Please give me Valid weights ${weight}`;
// 	} else {
// 		const bmi = (weight / ((height * height) / 10000)).toFixed(2);
// 		if (bmi < 18.6) {
// 			const bmiCategory = 'Under Weight';
// 		} else if (bmi >= 18.6 && bmi <= 24.9) {
// 			bmiCategory = 'Normal Range';
// 		} else {
// 			bmiCategory = 'Overweight';
// 		}
// 		weightGuide.innerHTML = `<p>Your BMI is ${bmi} which is considered ${bmiCategory}.</p>`;
// 	}
// });

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
	e.preventDefault();

	const height = parseInt(document.querySelector('#height').value);
	const weight = parseInt(document.querySelector('#weight').value);
	const results = document.querySelector('#results');
	if (height === '' || height < 0 || isNaN(height)) {
		results.innerHTML = `Please give a valid height`;
	}
	results.innerHTML = `${height}`;
});
