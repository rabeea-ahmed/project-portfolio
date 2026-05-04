// select main envelope section
const el = document.querySelector("#valentine");

// trigger "open" animation when section is 50% visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            el.classList.add("open");
        } else {
            el.classList.remove("open");
        }
    });
}, { threshold: 0.5 });

observer.observe(el);


// popup elements
const card = document.querySelector(".card");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closePopup");

// ppen popup on card click
card.addEventListener("click", () => {
    popup.style.display = "flex";
});

// close popup on X button click
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// close popup when clicking outside content
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});


// speed up demo videos
document.querySelectorAll("video").forEach(v => {
    v.playbackRate = 2.5; 
});