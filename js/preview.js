document.body.addEventListener('click', e => {
    if (!e.target.matches('button')) {
        return;
    }
    console.log(e.target.dataset.src);
    document.querySelector('.preview img').src = e.target.dataset.src;
    
    document.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
})