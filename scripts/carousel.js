const photos = ["c1.jpeg", "c2.jpeg", "c3.jpeg", "c4.jpeg", "c5.jpeg", "c6.jpeg"]

let carouselRiders = [0, 1, 2];
const n = photos.length;
let k;

function carouselRight() {
    for (let i = 0; i < n; i++) {
        carouselRiders[i] = (carouselRiders[i] + 1) % n;
    }
    displayCarousel();
}

function carouselLeft() {
    for (let i = 0; i < n; i++) {
        k = carouselRiders[i];
        if (k == 0) {
            carouselRiders[i] = n - 1;
        } 
        else {
            carouselRiders[i] = carouselRiders[i] - 1;
        }
    }
    displayCarousel();
}

function hello() {
    console.log(carouselRiders);
    displayCarousel();
}

function displayCarousel() {
    document.querySelector('.cleft').innerHTML = `<img src="./images/${photos[carouselRiders[0]]}" alt="${photos[carouselRiders[0]]}" onclick="carouselLeft()">`;
    document.querySelector('.cmiddle').innerHTML = `<img src="./images/${photos[carouselRiders[1]]}" alt="${photos[carouselRiders[1]]}">`;
    document.querySelector('.cright').innerHTML = `<img src="./images/${photos[carouselRiders[2]]}" alt="${photos[carouselRiders[2]]}" onclick="carouselRight()">`;
}