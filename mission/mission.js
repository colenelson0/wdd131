const themeSelector = document.querySelector("select")
function changeTheme() {
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!
const value = themeSelector.value;
const body = document.querySelector("body")
const image = document.querySelector("img")
// if the value is dark then:
// add the dark class to the body
// change the source of the logo img to point to the white logo.
// otherwise
// remove the dark class
// make sure the logo src is the blue logo.
if (value == "dark")
{
    body.classList.add("dark")
    image.src = "byui-logo_white.png"
}
else
{
    body.classList.remove("dark")
    image.src = "logo.webp"
}
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);