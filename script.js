
const totalImages = 21;
let currentIndex = 0;

function updateImage() {
    const imageElement = document.getElementById("event-image");
    const counterElement = document.getElementById("counter-text");
    imageElement.src = `upload/event${currentIndex + 1}.png`;
    counterElement.textContent = `${currentIndex + 1} / ${totalImages}`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateImage();
}

window.onload = updateImage;
