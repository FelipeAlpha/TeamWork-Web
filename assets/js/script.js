function map(val, minA, maxA, minB, maxB) {
    return minB + ((val - minA)) * ((maxB - minB)) / (maxA - minA);
}

function Card3D(card, ev) {
    let img = card.querySelector('.left-login-img');
    let imgRect = img.getBoundingClientRect();
    let mouseX = ev.clientX - imgRect.left;
    let mouseY = ev.clientY - imgRect.top;
    let width = imgRect.width;
    let height = imgRect.height;
    let rotateY = map(mouseX, 0, width, -25, 25);
    let rotateX = map(mouseY, 0, height, 25, -25);
    let brightness = map(mouseY, 0, height, 1.5, 0.5);

    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    img.style.filter = `brightness(${brightness})`;
}

var leftLogin = document.querySelector('.left-login');

leftLogin.addEventListener('mousemove', (ev) => {
    Card3D(leftLogin, ev);
});

leftLogin.addEventListener('mouseleave', () => {
    let img = leftLogin.querySelector('.left-login-img');

    img.style.transform = 'rotateX(0deg) rotateY(0deg)';
    img.style.filter = 'brightness(1)';
})