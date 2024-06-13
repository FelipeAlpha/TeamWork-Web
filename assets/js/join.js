document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.left-login-img');

    img.addEventListener('mouseover', () => {
        img.classList.add('hovered');
    });

    img.addEventListener('mouseout', () => {
        img.classList.remove('hovered');
    });
});