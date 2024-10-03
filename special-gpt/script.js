document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const dynamicBtn = document.getElementById('dynamicBtn');
    dynamicBtn.addEventListener('click', () => {
        alert("Surprise! You clicked the button!");
    });
});
