let rating = '';
const buttons = document.getElementsByName('ratingBtn');
const dialog = document.getElementById('dialog');

const markRating = (e) => {
	buttons.forEach( (element) => {
		element.classList.remove('selected');
		rating = '';
	});
	
	e.target.className = 'selected';
	rating = e.target.innerText;
	dialog.close();
};

buttons.forEach( (element) => {
	element.addEventListener('click', markRating);
});


const form = document.getElementById('formContainer');

const submitForm = (e) => {
	if (rating === '') {
		e.preventDefault();
		dialog.show();
	}else {
		document.cookie = `rating=${rating};`;
	}

};

form.addEventListener('submit', submitForm);

