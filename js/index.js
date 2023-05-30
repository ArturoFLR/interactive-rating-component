let rating = '';
const buttons = document.getElementsByName('ratingBtn');
const dialog = document.getElementById('dialog');
const ratingPage = document.getElementById('ratingPage');
const thanksPage = document.getElementById('thanksPage');
const ratingSpan = document.getElementById('userVote');
const form = document.getElementById('formContainer');

const markRating = (e) => {
	buttons.forEach( (element) => {
		element.classList.remove('selected');
		rating = '';
	});
	
	e.target.classList.add('selected');
	rating = e.target.innerText;
	dialog.close();
};

buttons.forEach( (element) => {
	element.addEventListener('click', markRating);
});

const submitForm = (e) => {
	e.preventDefault();

	if (rating === '') {
		dialog.show();
	}else {
		ratingPage.classList.add('hidden');
		thanksPage.classList.remove('hidden');
		ratingSpan.innerText = rating;
	}

};

form.addEventListener('submit', submitForm);

