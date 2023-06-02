const buttonSection = document.querySelectorAll('.buttons-section button');
const cardSection = document.querySelectorAll('.cards-section .card');

const filtercards = (e) => {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');

    cardSection.forEach((card) => {
        card.classList.add('hide');

        if (
            card.dataset.name === e.target.dataset.name ||
            e.target.dataset.name === 'all'
        ) {
            card.classList.remove('hide');
        }
    });
};

buttonSection.forEach((button) =>
    button.addEventListener('click', filtercards)
);
