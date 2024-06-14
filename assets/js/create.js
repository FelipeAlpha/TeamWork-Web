document.addEventListener('DOMContentLoaded', function () {
    const image = document.querySelector('TeamWorkMaker.svg');
    
    image.addEventListener('mousemove', (event) => {
        const rect = image.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const moveX = (x - rect.width / 2) / 10;
        const moveY = (y - rect.height / 2) / 10;

        image.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'translate(0, 0)';
    });
});