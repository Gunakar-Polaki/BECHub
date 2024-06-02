const images = [
    'assets/images/bec1.jpg',
    'assets/images/bec2.jpg',
    'assets/images/bec3.jpg',
    'assets/images/bec4.jpg',
    'assets/images/bec5.jpg',
    'assets/images/bec6.jpg',
];

let currentIndex = -1;

function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    document.querySelector('.home-bg').style.backgroundImage = `url(${images[currentIndex]})`;
}

setInterval(changeBackground, 3000);
