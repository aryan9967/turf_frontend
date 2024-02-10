const bottom_nav = document.getElementById("nav_bottom")
const top_nav = document.getElementById("top_nav")
const footer_left = document.getElementById("footer_left")
const footer_right = document.getElementById("footer_right")

if (window.innerWidth > "768") {
    bottom_nav.style.display = "none"
}
else {
    bottom_nav.style.display = "flex"
    top_nav.classList.remove("px-3");
    top_nav.classList.add("bg-body-secondary")
    top_nav.innerHTML = `<div class="nav_for_phone bg-body-tertiary" id="nav_for_phone">
    <div class="heading_ph fw-semibold">Turf</div>
    <button class="search_btn btn"><span class="material-symbols-outlined">
        search
        </span></button>
</div>`
    footer_left.classList.add("col-8")
    footer_right.classList.add("col-4")
    footer_left.classList.remove("col-5")
    footer_right.classList.remove("col-7")
}

function window_resize() {
    if (window.innerWidth > "768") {
        bottom_nav.style.display = "none"
    }
    else {
        bottom_nav.style.display = "flex"
        top_nav.classList.remove("px-3");
        top_nav.classList.add("bg-body-secondary")
        top_nav.innerHTML = `<div class="nav_for_phone bg-body-tertiary" id="nav_for_phone">
        <div class="heading_ph fw-semibold">Turf</div>
        <button class="search_btn btn"><span class="material-symbols-outlined">
            search
            </span></button>
    </div>`
    }
}
var prevScrollpos = window.scrollY;
window.onscroll = function () {
    if (window.innerWidth < "768") {
        if (window.scrollY > 55) {
            // console.log(window.scrollY)
            var currentScrollPos = window.scrollY;
            if (prevScrollpos > currentScrollPos) {
                top_nav.style.top = "0";
            } else {
                top_nav.style.top = "-10vh";
            }
            prevScrollpos = currentScrollPos;
            // console.log(prevScrollpos)
        }
    }
}

window.addEventListener('resize', window_resize);