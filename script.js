const cardContainer = document.querySelector('.card__container');
const cardButton = document.querySelector('.card__button');
const cardRating = document.querySelector('.card__rating');
const inputRating = document.querySelectorAll('input[name=rating]');

let usersRate;

inputRating.forEach(item => {
    item.addEventListener('click', () => {
        usersRate = item.id.slice(-1);
        cardRating.setAttribute('data-rate', usersRate);
        if (document.querySelector('.alert-danger') && cardRating.getAttribute('data-rate') !== "") {
            cardButton.disabled = false;
            document.querySelector('.alert-danger').remove();
        }
    })
})

cardButton.addEventListener('click', () => {
    if (cardRating.getAttribute('data-rate') === "") {
        cardContainer.insertAdjacentHTML('beforeend', '<div class="alert-danger">Please select a number between 1 and 5 to proceed.</div>');
        cardButton.disabled = true;
    }
    else {
        cardContainer.classList.add('hide-animation');
        cardContainer.addEventListener('animationend', () => {
            cardContainer.classList.remove('hide-animation');
            cardContainer.classList.add('card--success','show-animation');
            cardContainer.innerHTML = `
            <picture>
            <img src="images/illustration-thank-you.svg" alt="Thank You Icon">
            </picture>
            <span class="card__badge">You selected ${usersRate} out of 5</span>
            <h1>Thank you!</h1>
            <p>
            We appreciate you taking the time to give a rating. If you ever need more support,
            don't hesitate to get in touch!
            </p>
            `;
        })
    }
});