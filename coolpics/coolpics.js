const button = document.querySelector(".menu-button");
const gallery = document.querySelector(".gallery");
const htmlBody = document.querySelector("body");

function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}

function viewerTemplate(picture, altText) {
    return `<div class="img-viewer">
        <button class="close-viewer">X</button>
        <img src="${picture}" alt="${altText}">
        </div>`;
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    let clickedImg = event.target;
	// get the src attribute from that element and 'split' it on the "-"
    let imgSource = clickedImg.src;
    imgSource = imgSource.split("-")[0];
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    imgSource = imgSource + "-full.jpeg";
    const alt = "Cool picture, higher resolution";
	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    htmlBody.insertAdjacentHTML("afterbegin", viewerTemplate(imgSource, alt));

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", closeViewer);
}

function closeViewer() {
    const viewer = querySelector(".img-viewer");
    viewer.remove();
}

button.addEventListener("click", toggleMenu);
gallery.addEventListener("click", viewHandler);