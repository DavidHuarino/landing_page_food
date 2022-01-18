const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__menu, .home__img, .services__img, .services__menu`, {
    interval: 200
});