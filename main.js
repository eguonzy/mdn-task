const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (i = 1; i < 6; i++) {


    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/pic" + i + '.jpg');
    thumbBar.appendChild(newImage);
}
thumbBar.onclick = (e) => {

        displayedImage.setAttribute("src", e.target.src)

    }
    /* Wiring up the Darken/Lighten button */
let fm = document.querySelector('.full-img')
btn.onclick = () => {
    if (btn.getAttribute('class') !== "dark") {
        btn.setAttribute('class', "dark")
        btn.style.color = "rgba(0,0,0,0.5)"
        overlay.style.backgroundColor = "rgba(0,0,0,0)"
    } else if (btn.getAttribute('class') === "dark") {
        btn.setAttribute('class', 'light')
        btn.style.color = "rgba(0,0,0,0)"
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)"
    }
    console.log(btn.getAttribute('class'))

}