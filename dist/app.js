var img1 = './../assets/images/icon-plus.svg';
var img2 = './../assets/images/icon-minus.svg';
document.querySelectorAll('#toggleAnswer').forEach(btn => {
    btn.addEventListener('click', () => {
        const answer = btn.closest('.faq-card__item').querySelector('p');
        answer.classList.toggle('display-none');
        const img = btn.querySelector('img');
        if (answer.classList.contains('display-none')) {
            img.src = img1;
        } else {
            img.src = img2;
        }
    });
});
