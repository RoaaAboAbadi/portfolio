document.getElementById("about-btn").addEventListener("click", function() {
    window.open("https://drive.google.com/file/d/145Mo7eQutz-R-YTRjnQ2kMmiI46OrujW/view?usp=sharing", "_blank");
});





document.getElementById("visit1-btn").addEventListener("click", function() {
    window.open("https://roaaaboabadi.github.io/simple-shop/", "_blank");
});


document.getElementById("visit2-btn").addEventListener("click", function() {
    window.open("https://roaaaboabadi.github.io/memory-game/", "_blank");
});


document.getElementById("visit3-btn").addEventListener("click", function() {
    window.open("https://roaaaboabadi.github.io/ToDo-App/", "_blank");
});

document.getElementById("visit4-btn").addEventListener("click", function() {
    window.open("https://roaaaboabadi.github.io/drag_and_drop/", "_blank");
});

document.getElementById("visit5-btn").addEventListener("click", function() {
    window.open("https://roaaaboabadi.github.io/template2-css/", "_blank");
});

document.getElementById("visit6-btn").addEventListener("click", function() {
    window.open("https://roaaaboabadi.github.io/simlle-clock/", "_blank");
});


let showMoreBtn = document.getElementById("about-btn-two");
showMoreBtn.addEventListener("click", function() {
    console.log("LLLLL")
    let moreBoxes = document.getElementById("more-boxes");

    if (moreBoxes) {
        moreBoxes.classList.add("visable")
    }
    showMoreBtn.style.display = "none";


});

document.getElementById("instegram-icon").addEventListener("click", function() {
    window.open("https://www.instagram.com/roaa_m_abadi?igsh=Mzk5MmM3MzM2dGwz", "_blank");
});

document.getElementById("linkedin-icon").addEventListener("click", function() {
    window.open("https://www.linkedin.com/feed/", "_blank");
});

document.getElementById("github-icon").addEventListener("click", function() {
    window.open("https://github.com/RoaaAboAbadi", "_blank");
});

document.getElementById("whatsapp-icon").addEventListener("click", function() {
    window.open("https://wa.me/972592367465", "_blank");
});