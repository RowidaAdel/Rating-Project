let selectedRating = null;
let thanks = document.getElementById("card__thanks")
let rating = document.getElementById("card__rating")
let rating__num = document.getElementById("rating__num")

document.querySelectorAll('.rating button').forEach(button => {
    button.addEventListener('click', (event) => {
        selectedRating = event.target.textContent;
        console.log(selectedRating)
        document.querySelectorAll('.rating button').forEach(btn => {
            btn.classList.remove('selected');
        });
        event.target.classList.add('selected');
    });
});
document.querySelector('.submit-btn').addEventListener('click', () => {
    if (selectedRating) {
        thanks.style.display = "block"
        rating.style.display = "none"
        rating__num.textContent=selectedRating;
    } else {
        alert('Please select a rating before submitting!');
    }
});