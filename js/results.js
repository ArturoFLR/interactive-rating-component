const rating = document.cookie.split('=')[1];
const ratingSpan = document.getElementById('userVote');

ratingSpan.innerText = rating;