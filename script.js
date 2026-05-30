const pai = document.getElementById('eventos-pai');

pai.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.id);
});

